import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from 'actions'
import { useEffect } from 'react'

const StreamList = ({ fetchStreams }) => {
  useEffect(() => {
    fetchStreams()
  }, [fetchStreams])

  return <div>StreamList</div>
}

const mapDispatchToProps = {
  fetchStreams
}

export default connect(null, mapDispatchToProps)(StreamList)
