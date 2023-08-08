import { IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonGrid, IonItem, IonLabel, IonList, IonListHeader, IonRow, IonSearchbar, IonText } from '@ionic/react';
import './ExploreContainer.css';
import { about } from '../strings';

interface ContainerProps { }

const MainContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <IonGrid>
        <IonRow><IonCol offset='10'><IonSearchbar/></IonCol></IonRow>
        <IonRow>
          <IonCol><IonText color="primary"><h1>We are BiblioNexus!</h1></IonText></IonCol>
        </IonRow>
        <IonRow>
          <IonCol offset='2'><IonButton>Our Projects</IonButton></IonCol>
          <IonCol pull='2'><IonButton>Contribute</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard>
              <IonCardTitle><IonText color="secondary"><h2>About Us</h2></IonText></IonCardTitle>
              <IonCardContent>{about}</IonCardContent>            
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonCardTitle><IonText color="secondary"><h2>Most Recent...</h2></IonText></IonCardTitle>
              <IonCardContent>
                <IonList>
                  <IonListHeader><IonButton>See All</IonButton></IonListHeader>
                  <IonItem>
                    <IonLabel>Cool Project</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Cooler Project</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Even Cooler</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Coolest of all</IonLabel>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonText color="primary" ><h1>News</h1></IonText>
        </IonRow>
        <IonRow>
          <IonCol><IonCard><IonCardTitle>non consectetur a erat nam</IonCardTitle><IonCardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat.</IonCardContent></IonCard></IonCol>
          <IonCol><IonCard><IonCardTitle>non consectetur a erat nam</IonCardTitle><IonCardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat.</IonCardContent></IonCard></IonCol>
          <IonCol><IonCard><IonCardTitle>non consectetur a erat nam</IonCardTitle><IonCardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat.</IonCardContent></IonCard></IonCol>
          <IonCol><IonCard><IonCardTitle>non consectetur a erat nam</IonCardTitle><IonCardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat.</IonCardContent></IonCard></IonCol>
          <IonCol><IonCard><IonCardTitle>non consectetur a erat nam</IonCardTitle><IonCardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat.</IonCardContent></IonCard></IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};


export default MainContainer;
