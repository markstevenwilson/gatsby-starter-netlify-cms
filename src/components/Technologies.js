import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Technologies = ({ data }) => (
    <div className="columns is-multiline">
        {data.map((technology) => (
            <div key={technology.techname} className="column is-3">
                <section className="section">
                    <h4 className="has-text-centered has-text-weight-semibold">
                        {technology.techname}
                    </h4>
                    <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
                        <PreviewCompatibleImage imageInfo={technology.svgicon} />
                    </h2>
                    <p className="has-text-weight-semibold">{technology.description}</p>
                        {technology.items.map((item) => (
                            <li key={item} className="is-size-5">
                                {item}
                            </li>
                        ))}
                </section>
            </div>
        ))}
    </div>
)

Technologies.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            techname: PropTypes.string,
            svgicon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            description: PropTypes.string,
            items: PropTypes.array,
        })
    ),
}

export default Technologies
