import React from 'react'
import PropTypes from 'prop-types'

const DefaultWrapper = ({ children }) => {
    return (
        <section>
            {/* header component */}
            <h1 className="text-green-700">Header</h1>
            {children}

            {/* footer component */}
        </section>
    )
}

DefaultWrapper.propTypes = {
    children: PropTypes.any,
}

export default DefaultWrapper
