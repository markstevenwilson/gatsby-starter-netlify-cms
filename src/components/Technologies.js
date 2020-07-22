import React from 'react'
import PropTypes from 'prop-types'

const Technologies = ({ data }) => (
    <div className="columns">
        {data.map((technology) => (
            <div key={technology.techname} className="column">
                <section className="section">
                    <h4 className="has-text-centered has-text-weight-semibold">
                        {technology.techname}
                    </h4>
                    <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
                        ${technology.svgicon}
                    </h2>
                    <p className="has-text-weight-semibold">{technology.description}</p>
                    <ul>
                        {technology.items.map((item) => (
                            <li key={item} className="is-size-5">
                                {item}
                            </li>
                        ))}
                    </ul>
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
