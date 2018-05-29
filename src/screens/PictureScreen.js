import React, {Component} from "react";

const urlForPictures = pictures =>
'https://randomuser.me/api/?results=5'

class Mypictures extends Component {
    constructor() {
        super();
        this.state ={
            pictures:[],
            facts:[],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({isLoading: true})
        fetch(urlForPictures(this.props.pictures))
        .then(results => {
            if (results.ok){
            return results.json();
        }
         else {throw new Error('Något gick fel ...');
        }
        }).then(data => {

        data.results.map((pic,i) => {
        this.setState({
                ...this.state,
                pictures: [...this.state.pictures,{pic:pic.picture.large,key:i}], isLoading: false
            })
            return"";
        })

        }).catch(error => this.setState({ error, isLoading: false }));
    }
    

render() {
        const {isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
          }

        if (isLoading) {
          return <div className="laddBild"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Laddar ..." />
                </div>;
        }
       
        return(
            <div>
                <div>
                  
                  { this.state.pictures.map((row) => {
                      return(
                            <div>
                                    <div>
                                    <img src={row.pic} key={row.key} alt="Oj då, duck you!" /> 
                                    </div>
                                    <div>
                                     
                                    </div>
                            </div>
                      )
                })}
                </div>
                <div>
                  
                </div>
            </div>
        )
    }
    }

    export default Mypictures;