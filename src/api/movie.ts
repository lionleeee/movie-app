import axios ,{AxiosResponse} from 'axios';
import { promises } from 'dns';


type NowPlayingData = any;
type MovieDetailData = any;

const REST_API_ADDR = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        language : "KO-KR",
        api_key : "5bf3a23c79422b045fcc7ab7c5a17feb"
    },
});

export const homeApi = {
    nowPlaying : () : Promise<AxiosResponse<NowPlayingData>> => REST_API_ADDR.get("movie/now_playing"),

    movieDetail :(id:number) : Promise<AxiosResponse<MovieDetailData>> =>
        REST_API_ADDR.get(`movie/${id}`,{
            params:{append_to_response : "videos"}
        }),
};


