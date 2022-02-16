import './App.css';


function Liste({pers}) {

    const sectionStyle = {
        Witch:"100%",
        backgroundImage: "url(" + pers.photo  + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"center",
        backgroundSize:"cover",
        borderRadius:"50%",
        flex:1
      };

  return (
    <div className="Liste">
     <div style={sectionStyle}>
  
     </div>
     <div className='informations'>
     <p className='prenom'>{pers.prenom}</p>
     <p className='date'>{pers.date_anniversaire}</p>
    </div>
    </div>
  );
}

export default Liste;