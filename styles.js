import { StyleSheet } from 'react-native';

export default StyleSheet.create({
//ulkoasun määrittely
    container: { //pääelementti
        backgroundColor: '#fff', // valkoinen tausta
        flex: 1, // täyttää koko tilan
        top: 30,
        padding: 50, // sijoittaa tyhjäätilaa kaikille reunoilla 
    },
    title: { //otsikko
      color: '#808080', //harmaa
      textAlign: 'center', //tekstin keskitys
      width: '100%', //otsikko täyttää vaakasuunnassa tilan
      height: 50, //otsikko alueen korkeus
      fontSize: 40, // otsikon koko
      fontWeight: 'bold', // lihavoitu
    },
    text: {
      fontSize: 30, // fontti koko
      color: '#000000', //musta väri
    },   
    Input: { // ruutu johon syötetään
        height: 30, //korkeus, ruudun koko
        bolderWidth: 3,
        borderColor: '#ccc', 
        color: "#000",
        backgroundColor: '#fff'
    },   
    green : {
      fontSize: 20, //koko 
      color: "green", //väri
    },
    yellow : {
      fontSize: 20,
      color: "yellow",
    },
    red : {
      fontSize: 20,
      color: "red",
    }, 
  })