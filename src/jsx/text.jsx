import React from 'react';

class Text extends React.Component {
   handleClick(){
   		window.location.hash = '#/';
   }
   render() {
      return (
        <div>
            Hello World!!!<br />
            <div onClick = {this.handleClick}>Fetch</div>
        </div>
      );
   }
}

export default Text;