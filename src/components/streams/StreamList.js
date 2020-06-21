import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from 'actions'
import { useEffect } from 'react'

const StreamList = ({ fetchStreams, streams }) => {
  useEffect(() => {
    fetchStreams()
  }, [fetchStreams])

  const renderList = () => {
    return streams.map((stream) => {
      return (
        <div className='item' key={stream.id}>
          <i className='large middle aligned icon camera' />
          <div className='content'>
            {stream.title}
            <div className='description'>{stream.description}</div>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      <h2>Streams</h2>
      <div className='ui celled list'>{renderList()}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams)
  }
}

const mapDispatchToProps = {
  fetchStreams
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamList)
