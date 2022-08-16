import React, { useEffect, useState } from 'react';
import ReduxDemo from './pages/ReduxDemo';
import './main.css';
import { Route, Routes } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import Home from './pages/Home';
import ChatRoom from './pages/Chatroom';
import History from './pages/History';
import LoginPage from './pages/LoginPage';
import RouteGuard, { RouteProps } from './utils/RouteGuard';
import Matchmaking from './pages/Matchmaking';
import Cookies from 'universal-cookie';
import authServices from './services/auth-services';
import { useDispatch } from 'react-redux';
import { setIsAuthorized, setToken, setUserData } from './redux/actions/auth';
import { UserData } from './interfaces/auth';
import Loading from './components/Loading';
import MultipleLoginError from './pages/MultipleLoginError';
import BackgroundMusic from './assets/audio/audio.mp3';

function fixComponent<T>(component: T): T {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (component as any).default ?? component;
}
const ReactAudioPlayerComponent = fixComponent(ReactAudioPlayer);

export const routes: RouteProps[] = [
  {
    Component: LoginPage,
    path: '/login',
    beforeLoggedIn: true,
  },
  {
    Component: Home,
    path: '/',
    afterLoggedIn: true,
  },
  {
    Component: ChatRoom,
    path: '/chat',
    afterLoggedIn: true,
  },
  {
    Component: History,
    path: '/history',
    afterLoggedIn: true,
  },
  {
    Component: ReduxDemo,
    path: '/redux-demo',
    afterLoggedIn: true,
  },
  {
    Component: Matchmaking,
    path: '/matchmaking',
    afterLoggedIn: true,
  },
  {
    Component: MultipleLoginError,
    path: '/connection-error',
    afterLoggedIn: true,
  },
];

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const inputRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current !== null) {
        inputRef.current.click();
      }
    }, 1000);
  }, [inputRef]);

  const musicTrigger = () => {
    const music = document.getElementById(
      'backgroundMusic'
    ) as HTMLAudioElement;
    if (music != null) {
      music.play();
    }
  };

  const initState = async () => {
    setLoading(true);

    const cookie = new Cookies();
    const cookies = cookie.getAll();

    let token = '';

    if (cookies) {
      if (cookies.token) {
        token = cookies.token;
      }
    }

    try {
      const res = (await authServices.getMyProfile(token)) as UserData;
      dispatch(setToken(token));
      dispatch(setIsAuthorized(true));
      dispatch(
        setUserData({
          username: res.username,
          name: res.name,
          sex: res.sex,
          campus: res.campus,
          faculty: res.faculty,
        })
      );
    } catch (error) {
      token = '';
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initState();
  }, []);

  if (loading) return <Loading />;

  return (
    <div ref={inputRef} onClick={musicTrigger}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <RouteGuard {...route}>
                <route.Component />
              </RouteGuard>
            }
          ></Route>
        ))}
      </Routes>
      <ReactAudioPlayerComponent
        id="backgroundMusic"
        src={BackgroundMusic}
        autoPlay={true}
        loop
      />
    </div>
  );
};

export default App;
