import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Technologies from '../components/Technologies'
import Content, { HTMLContent } from '../components/Content'

export const PortfolioItemTemplate = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    technologies,
    helmet,
}) => {
    const PostContent = contentComponent || Content

    return (
        <section className="section">
            {helmet || ''}
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {title}
                        </h1>
                        <p>{description}</p>
                        <PostContent content={content} />
                        {tags && tags.length ? (
                            <div style={{ marginTop: `4rem` }}>
                                <h4>Tags</h4>
                                <ul className="taglist">
                                    {tags.map((tag) => (
                                        <li key={tag + `tag`}>
                                            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                        <h2 className="has-text-weight-semibold is-size-2">
                            {technologies.heading}
                        </h2>
                        <p className="is-size-5">{technologies.description}</p>
                        <Technologies data={technologies.technology} />

                    </div>
                </div>

            </div>
        </section>
    )
}

PortfolioItemTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
    technologies: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        technology: PropTypes.array,
    }),
}

const PortfolioItem = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <PortfolioItemTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.description}`}
                        />
                    </Helmet>
                }
                technologies={post.frontmatter.technologies}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
            />
        </Layout>
    )
}

PortfolioItem.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default PortfolioItem

export const pageQuery = graphql`
  query PortfolioItemByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        technologies {
          heading
          description
          technology {
            techname
            svgicon {
                alt
                image {
                  childImageSharp {
                    fluid(maxWidth: 300, quality: 100, maxHeight: 300) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            description
            items
          }
        }
      }
    }
  }
`