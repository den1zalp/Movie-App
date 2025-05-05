import { Link } from 'expo-router'
import { View, Text, TouchableOpacity, Image } from 'react-native'


const MovieCard = ({id, poster_path, title, vote_average, release_date}: Movie) => {
    console.log(poster_path)
  return (
    <Link href={`/movie/${id}`} asChild>
        <TouchableOpacity className='w-[30%]'>

            <Image
                source={{ uri: poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    :
                    'https://via.placeholder.com/500x750?text=No+Image+Available'
                }}
                className='w-full h-52 rounded-lg'
                resizeMode='cover'
                />

            <Text className='text-sm font-bold text-white mt-2'>{title}</Text>


        </TouchableOpacity>

    </Link>
  )
}

export default MovieCard