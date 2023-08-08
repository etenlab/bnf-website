import { IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonGrid, IonItem, IonLabel, IonList, IonListHeader, IonRow, IonText } from '@ionic/react';
import './ExploreContainer.css';
import { about } from '../strings';

interface ContainerProps { }

const MainContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <IonGrid>
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
      </IonGrid>
    </div>
  );
};


export default MainContainer;
