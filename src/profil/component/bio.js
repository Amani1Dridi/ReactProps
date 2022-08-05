function Bio() {
    return (
      <div className="text span ">
        <NewComponent mybio='I am  Part-time University Professor, Higher Institute of Technological Studies of Nabeul , working as a Part-time Instructor Python| Artificial intelligence | Business Intelligence at  GOMYCODE,and Data Engineer at Magaztee.'></NewComponent>
      </div>
    );
  }
  
  function NewComponent(props) {
    const styleobject={textAlign:'center'}
    return (
      <div>
        <h1 style={styleobject}>{props.mybio}</h1>
        
      </div>
    )
  }
  export default Bio;