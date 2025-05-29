import { icons } from '@/constants/icons'
import { Link } from 'expo-router'
import { View, Text, TouchableOpacity, Image } from 'react-native'


const MovieCard = ({id, poster_path, title, vote_average, release_date, original_language}: Movie) => {
    console.log(poster_path)
  return (
    <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity className='w-[30%]'>

            <Image
                source={{ uri: poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    :
                    'https://via.placeholder.com/500x750?text=No+Image+Available'
                }}
                className='w-full h-52 rounded-lg '
                resizeMode='cover'
                />



            <View className="flex-row justify-between items-center mt-2">
            <Text className="text-sm font-bold text-white" numberOfLines={1}>
                {title}
            </Text>
            <Text className=" text-red-500 text-xs px-2 py-1 rounded ml-2">
                {original_language}
            </Text>
            </View>

            
            <View className='flex-row item-centered justify-start gap-x-1'>
                
                <Image source={icons.star} className='size-4' />
                <Text className='text-sm text-white font-bold'>{Math.round(vote_average / 2)}</Text>  
            </View>
                
            <View className='flex-row item-centered justify-between'>
                <Text className='text-xs text-light-300 font-medium mt-1'>
                    {release_date.split('-')[0]}
                </Text>
                
                 <Text className='text-xs font-medium text-light-300 uppercase'>
                    Movie
                 </Text>
                <View className='flex-row items-end justify-end'>
                
                </View>
                    
            </View>
        </TouchableOpacity>

    </Link>
  )
}

export default MovieCard