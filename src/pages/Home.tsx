import { 
  IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonIcon, 
      IonLabel, 
      IonMenuButton, 
      IonPage, 
      IonRouterOutlet, 
      IonTabBar, 
      IonTabButton, 
      IonTabs, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bookOutline, search, star } from 'ionicons/icons';
import { Route, Redirect } from 'react-router';
import Favorites from './home-tabs/Favorites';
import Feed from './home-tabs/Feed';
import Search from './home-tabs/Search'; 


  
  const Home: React.FC = () => {

    const tabs = [
      {name:'Feed', tab:'feed',url: '/ionic-test/app/home/feed', icon: bookOutline},
      {name:'Search', tab:'search', url: '/ionic-test/app/home/search', icon: search},
      {name:'Favorites',tab:'favorites', url: '/ionic-test/app/home/favorites', icon: star},
    ]
    
    return (
      <IonReactRouter>
        <IonTabs>
          <IonTabBar slot="bottom">

            {tabs.map((item, index) => (
              <IonTabButton key={index} tab={item.tab} href={item.url}>
                <IonIcon icon={item.icon} />
                <IonLabel>{item.name}</IonLabel>
              </IonTabButton>
            ))}
            
          </IonTabBar>
        <IonRouterOutlet>

        <Route exact path="/ionic-test/app/home/feed" render={Feed} />
          <Route exact path="/ionic-test/app/home/search" render={Search} />
          <Route exact path="/ionic-test/app/home/favorites" render={Favorites} />
          <Route exact path="/ionic-test/app/home">
            <Redirect to="/ionic-test/app/home/feed" />
          </Route>

        </IonRouterOutlet>
        </IonTabs>
      </IonReactRouter>
    );
  };
  
  export default Home;