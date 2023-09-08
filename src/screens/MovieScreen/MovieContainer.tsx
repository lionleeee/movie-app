import { Component } from "react";
import MoivePresenter from "./MoivePresenter";


class MovieContainer extends Component<{}, any>{

    render(){
        return <MoivePresenter { ...this.state} />
    }
    }

export default MovieContainer;