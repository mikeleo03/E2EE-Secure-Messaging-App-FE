import { TopicData } from '../interfaces/topics';
import Bandung from '../assets/topics/bandung.jpg';
import Film from '../assets/topics/film.jpg';
import ITB from '../assets/topics/itb.jpg';
import Jepang from '../assets/topics/jepang.jpg';
import Korea from '../assets/topics/korea.jpg';
import Makanan from '../assets/topics/makanan.jpg';
import Musik from '../assets/topics/musik.jpg';
import Olahraga from '../assets/topics/olahraga.jpg';
import OSKM2022 from '../assets/topics/oskm2022.jpg';
import PengenCurhat from '../assets/topics/pengencurhat.jpg';
import Travelling from '../assets/topics/travelling.jpg';
import Random from '../assets/topics/random.jpg';

export const topics: TopicData[] = [
  {
    topic_id: 1,
    topic_name: 'Bandung',
    hot_status: true,
    src: Bandung,
    drop_shadow: '#F2A138',
  },
  {
    topic_id: 2,
    topic_name: 'Film',
    hot_status: false,
    src: Film,
    drop_shadow: '#7EBD57',
  },
  {
    topic_id: 3,
    topic_name: 'ITB',
    hot_status: false,
    src: ITB,
    drop_shadow: '#F2A138',
  },
  {
    topic_id: 4,
    topic_name: 'Jepang',
    hot_status: false,
    src: Jepang,
    drop_shadow: '#B7B28D',
  },
  {
    topic_id: 5,
    topic_name: 'Korea',
    hot_status: false,
    src: Korea,
    drop_shadow: '#B7B28D',
  },
  {
    topic_id: 6,
    topic_name: 'Makanan',
    hot_status: false,
    src: Makanan,
    drop_shadow: '#55ADC8',
  },
  {
    topic_id: 7,
    topic_name: 'Musik',
    hot_status: false,
    src: Musik,
    drop_shadow: '#DE94D5',
  },
  {
    topic_id: 8,
    topic_name: 'Olahraga',
    hot_status: false,
    src: Olahraga,
    drop_shadow: '#F2A138',
  },
  {
    topic_id: 9,
    topic_name: 'OSKM 2022',
    hot_status: false,
    src: OSKM2022,
    drop_shadow: '#F2A138',
  },
  {
    topic_id: 10,
    topic_name: 'Pengen Curhat',
    hot_status: false,
    src: PengenCurhat,
    drop_shadow: '#55ADC8',
  },
  {
    topic_id: 11,
    topic_name: 'Travelling',
    hot_status: false,
    src: Travelling,
    drop_shadow: '#55ADC8',
  },
  {
    topic_id: 12,
    topic_name: 'Random',
    hot_status: false,
    src: Random,
    drop_shadow: '#E3AE5C',
  },
];
