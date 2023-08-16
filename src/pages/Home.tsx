import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import MainContainer from '../components/home/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen scrollEvents>
          <MainContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
