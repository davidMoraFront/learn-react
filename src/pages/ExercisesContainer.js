import React, { useState } from "react";
import Loading from "../components/Loading";
import FatalError from "./FatalError";
import Exercises from "./Exercises";

const ExercisesContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (loading) return <Loading />;
  if (error) return <FatalError />;
  return <Exercises data={data} />;
};

// class ExercisesContainer extends React.Component {
//   state = {
//     data: [],
//     loading: true,
//     error: null
//   };

//   async componentDidMount() {
//     await this.fetchExercises();
//   }

//   fetchExercises = async () => {
//     try {
//       let res = await fetch("http://localhost:8000/api/exercises");
//       let data = await res.json();

//       this.setState({
//         data,
//         loading: false
//       });
//     } catch (error) {
//       this.setState({
//         loading: false,
//         error
//       });
//     }
//   };

//   render() {
//     if (this.state.loading) return <Loading />;
//     if (this.state.error) return <FatalError />;
//     return <Exercises data={this.state.data} />;
//   }
// }

export default ExercisesContainer;
