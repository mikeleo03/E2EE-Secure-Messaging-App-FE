export interface TopicData {
  topic_id: number;
  topic_name: string;
  hot_status: boolean;
  src: string;
  drop_shadow: string;
}

export interface TopicResponse {
  topic_id: number;
  topic_name: string;
  hot_status: boolean;
}
