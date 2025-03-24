import { useParams } from "react-router";

export default function Podcast() {
  const { podcastId } = useParams();

  return (
    <div>
      <h1>Podcast {podcastId}</h1>
    </div>
  );
}
