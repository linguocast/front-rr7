import { Link, useLoaderData } from 'react-router'
// import { json } from '@react-router/node'
import axios from 'axios'
import type { MinifiedPodcast } from '../types/podcasts.types'
import { Helmet } from 'react-helmet'

// Server loader function
export async function loader() {
  // try {
  const response = await axios.get<MinifiedPodcast[]>(
    'http://localhost:3003/api/podcasts'
  )
  return response.data
  // } catch (error: unknown) {
  //   console.error('Failed to load podcasts:', error)
  //   throw json(
  //     { message: 'Failed to load podcasts' },
  //     { status: 500 }
  //   )
  // }
}

export default function Podcasts() {
  const podcasts = useLoaderData() as MinifiedPodcast[]

  return (
    <div>
      <Helmet>
        <title>Podcasts</title>
        <meta name="description" content="Browse our podcast collection" />
      </Helmet>

      <h1>Podcasts</h1>

      {podcasts.length === 0 ? (
        <p>No podcasts found</p>
      ) : (
        <ul className="podcast-list">
          {podcasts.map(podcast => (
            <li key={podcast.id} className="podcast-item">
              <Link to={`/podcasts/${podcast.id}`}>
                {podcast.imageUrl && (
                  <img
                    src={podcast.imageUrl}
                    alt={podcast.name}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover'
                    }}
                  />
                )}
                <h2>{podcast.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
