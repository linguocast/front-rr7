import { useParams } from 'react-router'
import axios from 'axios'
import type { Podcast } from '../types/podcasts.types'
import { Helmet } from 'react-helmet'
import { useLoaderData } from 'react-router'
import type { Route } from '../routes/+types/view.podcasts.ts'
// import { json } from '@react-router/node'

// Server loader function - this runs on the server
export async function loader({ params }: Route.LoaderArgs) {
  // try {
  const { podcastId } = params
  const response = await axios.get<Podcast>(
    `http://localhost:3003/api/podcasts/${podcastId}`
  )
  return response.data
  // } catch (error: unknown) {
  //   console.error('Failed to load podcast:', error)
  //   throw json({ message: 'Failed to load podcast' }, { status: 500 })
  // }
}

export function meta({ data: podcast }: Route.MetaArgs) {
  return [
    { title: podcast.name },
    {
      property: 'og:title',
      content: podcast.name
    },
    {
      property: 'og:image',
      content: podcast.imageUrl
    },
    {
      name: 'description',
      content: podcast.description
    }
  ]
}

// Client component
export default function PodcastView({ loaderData }: Route.ComponentProps) {
  const podcast = loaderData
  // useLoaderData<typeof loader>()
  // const { podcastId } = useParams()

  return (
    <div>
      <h1>{podcast.name}</h1>

      {podcast.imageUrl && (
        <img
          src={podcast.imageUrl}
          alt={podcast.name}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}

      <div className="podcast-description">
        <p>{podcast.description}</p>
      </div>
    </div>
  )
}
