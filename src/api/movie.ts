import axios ,{AxiosResponse} from 'axios';
import { promises } from 'dns';


type NowPlayingData = any;
type MovieDetailData = any;

const REST_API_ADDR = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        language : "KO-KR",
    },
});

export const homeApi = {
    noePlaying : () : Promise<AxiosResponse<NowPlayingData>> => REST_API_ADDR.get("movie/now_playing"),

    movieDetail :(id:number) : Promise<AxiosResponse<MovieDetailData>> =>
        REST_API_ADDR.get(`movie/${id}`,{
            params:{append_to_response : "videos"}
        }),
};


