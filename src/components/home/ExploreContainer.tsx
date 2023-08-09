import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonRow, IonSearchbar, IonText } from '@ionic/react';
import './ExploreContainer.css';
import { about, companyShortDesc, companySlogan, projects } from '../strings';

interface ContainerProps { }

const MainContainer: React.FC<ContainerProps> = () => {
  return (
      <IonGrid style={{ padding: "100px" }}>
        <IonRow><IonCol offset='10'><IonSearchbar/></IonCol></IonRow>
        <div id='centered'><IonRow>
          <IonCol><IonText color="primary"><img src="https://fakeimg.pl/1050x200/?text=BiblioNexus" /></IonText></IonCol>
        </IonRow></div>
        <div id='centered'>
        <IonRow>
          <IonCol style={{ padding: 0}}><IonText color="medium"><h1>{companySlogan}</h1></IonText></IonCol>
        </IonRow>
        <IonRow>
          <IonCol style={{ padding: 0 }}><p>{companyShortDesc}</p></IonCol>
        </IonRow>
        <hr style={{ height: '1px', width: '50%', background: "black" }} />
        <IonRow>
          <IonCol offset='2'><IonButton>Our Projects</IonButton></IonCol>
          <IonCol pull='2'><IonButton>Contribute</IonButton></IonCol>
        </IonRow>
        </div>
        <IonRow>
          <IonCol>
            <IonCard id='ion-card'> 
              <IonCardHeader><IonCardTitle><IonText color="secondary"><h2>About the Foundation</h2></IonText></IonCardTitle></IonCardHeader>
              <IonCardContent>{about}</IonCardContent>            
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard id='ion-card'>
              <IonCardHeader><IonCardTitle><IonText color="secondary"><h2>Our Projects</h2></IonText></IonCardTitle></IonCardHeader>
              <IonCardContent>
                <IonList>
                  {projects.map((project) => (
                    <IonItem key={project.name}>
                      <IonLabel><h2>{project.name}</h2><IonIcon icon="code-slash-outline" /><p>{project.description}</p></IonLabel>
                    </IonItem>
                  ))}
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
  );
};


export default MainContainer;
