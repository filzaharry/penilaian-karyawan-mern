import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
      initialValues: {
        image: state.karyawan.getKaryawanDetail.image,
      },
    };
  };

class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  render() {
    const { input: { value } } = this.props

    return (<input
      type="file"
      value={value}
      onChange={this.onChange}
    />)
  }
}

export default connect(mapStateToProps)(FileInput)