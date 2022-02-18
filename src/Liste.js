import './App.css';


function Liste({pers}) {

      let date = new Date();
      let annee = date.getFullYear();
      let age = annee - pers.annee_date;

  return (
    <div className="personne">
     <img src={pers.photo}></img>
        <div className='informations'>
          <p className='prenom'>{pers.prenom}</p>
          <p className='date'>{age} ans</p>
        </div>
    </div>
  );
}

export default Liste;