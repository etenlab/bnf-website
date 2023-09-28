import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow,
  IonSearchbar,
  IonText,
} from "@ionic/react";
import "./ExploreContainer.css";
import { about, companyShortDesc, companySlogan, projects } from "../strings";

interface ContainerProps {}

const MainContainer: React.FC<ContainerProps> = () => {
  return (
    <IonGrid style={{ padding: "100px" }}>
      <div className="title-image">
        <IonImg src="./FullLogo_Transparent_NoBuffer.png"></IonImg>
      </div>

      <div id="centered">
        <IonRow>
          <IonCol style={{ padding: 0 }}>
            <IonText color="medium">
              <h1>{companySlogan}</h1>
            </IonText>
          </IonCol>
        </IonRow>
      </div>
      <IonRow>
        <IonCol>
          <IonCard id="ion-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonText color="secondary">
                  <h2>About the Foundation</h2>
                </IonText>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{about}</IonCardContent>
          </IonCard>
        </IonCol>
        <IonCol>
          <IonCard id="ion-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonText color="secondary">
                  <h2>Our Projects</h2>
                </IonText>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                {projects.map((project) => (
                  <IonItem key={project.name}>
                    <IonLabel>
                      <h2>{project.name}</h2>
                      <IonIcon icon="code-slash-outline" />
                      <p>{project.description}</p>
                    </IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>

      <div id="centered">
        
        <IonRow>
          <IonCol style={{ padding: 0 }}>
            <p>{companyShortDesc}</p>
          </IonCol>
        </IonRow>
        {/* <IonRow>
          <IonCol offset="2">
            <IonButton>Our Projects</IonButton>
          </IonCol>
          <IonCol pull="2">
            <IonButton>Contribute</IonButton>
          </IonCol>
        </IonRow> */}
      </div>

      {/* <IonRow>
          <IonText color="primary" ><h1>News</h1></IonText>
        </IonRow> */}
      {/* <IonRow>
          <IonCol><IonCard><IonCardTitle>non consectetur a erat nam</IonCardTitle><IonCardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat.</IonCardContent></IonCard></IonCol>
          <IonCol><IonCard><IonCardTitle>non consectetur a erat nam</IonCardTitle><IonCardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat.</IonCardContent></IonCard></IonCol>
          <IonCol><IonCard><IonCardTitle>non consectetur a erat nam</IonCardTitle><IonCardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat.</IonCardContent></IonCard></IonCol>
          <IonCol><IonCard><IonCardTitle>non consectetur a erat nam</IonCardTitle><IonCardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat.</IonCardContent></IonCard></IonCol>
          <IonCol><IonCard><IonCardTitle>non consectetur a erat nam</IonCardTitle><IonCardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus viverra vitae congue eu consequat.</IonCardContent></IonCard></IonCol>
        </IonRow> */}
    </IonGrid>
  );
};

export default MainContainer;