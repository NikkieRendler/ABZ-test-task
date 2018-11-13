import React, { Component } from 'react'

class LoadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadedFile: 'Load your file'
        }
    }
    
    render() {
        let saveFile = (e) => {
            this.setState({loadedFile: e.target.files[0] });  
/*             this.setState({loadedFileName: this.state.loadedFile.loadedFile.name})  
 */            console.log(this.state)   
        }
        const loadedFileName = this.state.loadedFile.name
        return (
            <div className='auth-form-selectFile'>
                <input id='fileInput' type='file' onChange={(e) => saveFile(e)} />
                <span className='fileName'>{loadedFileName}</span>
                <label htmlFor='fileInput' className='auth-form-selectFile-button'>Load File</label>
                <span className='fileInput-undertext'>File format jpg  up to 5 MB, the minimum size of 70x70px</span>
            </div>
        )
    }
}

export default LoadFile