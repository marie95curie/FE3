import img_muzza from '../assets/img_muzza.jpg' //me traigo la imagen y la guardo en la variable
import Card from '../Components/Card' //importo el componente hijo

const Home = () => {
  
  let pizzas = [
      {id:1, tipo:'Muzzarella', precio:'$1200', img: img_muzza},
      {id:2, tipo:'Fugazza', precio:'$1250', img:'https://buenprovecho.hn/wp-content/uploads/2019/01/pizza-7.jpg'},
      {id:3, tipo:'Napolitana', precio:'$1350', img:'https://1.bp.blogspot.com/-3vGI42_mgHY/X0GMefE-W0I/AAAAAAAAAIg/f9rhUlzzF1UcdPY9WMHKKnbJpk0BLY7VACLcBGAsYHQ/s900/pizza-napolitana.jpg'},
      {id:4, tipo:'Rucula y Crudo', precio:'$1500', img:'https://pizzasargentinas.com/wp-content/uploads/2020/12/rucula-y-jamon-crudo.jpg'},
      {id:5, tipo:'Especial', precio:'$1400', img:'https://pizzariameurancho.com.br/wp-content/uploads/2016/06/especial_3209B-1560x1170.jpg'},
  ]

  return (
    // importo los estilos entre llaves
    <>
      {pizzas.map((pizza)=>{
          //retorno componente hijo con prop y key (importante al usar map())
          return <Card pizza={pizza} key={pizza.id}/>
      })}
    </>
  
  )
}

export default Home