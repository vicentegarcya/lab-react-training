import IdCard from './components/IdCard/IdCard.js';
import Greeting from './components/Greeting/Greeting.js';
import Random from './components/Random/Random.js';
import BoxColor from './components/BoxColor/BoxColor.js';
import CreditCard from './components/CreditCard/CreditCard.js';
import Rating from './components/Rating/Rating.js';
import DriverCard from './components/DriverCard/DriverCard.js';
import LikeButton from './components/LikeButton/LikeButton.js';
import ClickablePicture from './components/ClickablePicture/ClickablePicture.js';
import Dice from './components/Dice/Dice.js';
import Carousel from './components/Carousel/Carousel.js';
import NumbersTable from './components/NumbersTable/NumbersTable.js';
import FaceBook from './components/FaceBook/FaceBook.js';
import SignupPage from './components/SignupPage/SignupPage';
import RGBColorPicker from './components/RGBColorPicker/RGBColorPicker';

import img from "../src/assets/images/maxence.png";
import clickedImg from "../src/assets/images/maxence-glasses.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greeting lang="de">Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <div className="container" id='credit-cards-div'>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" 
        />
      </div>
      <div className="container" id='ratings-div'>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />
      <LikeButton />
      <LikeButton />
      <div className="container">
        <ClickablePicture
          img={img}
          imgClicked={clickedImg}
        />
      </div>
      <div className="mt-3 mb-3">
        <Dice />
      </div>
      <div className="mt-3 mb-3">
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      </div>
      <NumbersTable limit={12} />
      <FaceBook />
      <SignupPage />
      <div className='color-picker-div container'>
        <RGBColorPicker />
      </div>
    </div>
  );
}

export default App;
