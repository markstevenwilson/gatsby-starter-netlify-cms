import React from 'react'
import PropTypes from 'prop-types'
import { PortfolioItemTemplate } from '../../templates/portfolio-item'

const PortfolioItemPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  const badges = entry.getIn(['data', 'badges'])
 
  return (
      <PortfolioItemTemplate
      badges={badges && badges.toJS()}
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

PortfolioItemPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PortfolioItemPreview
