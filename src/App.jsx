import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import './App.css'
import {
  ReactiveBase,
  SearchBox,
  MultiList,
  SingleRange,
  ReactiveList,
  ResultCard,
} from '@appbaseio/reactivesearch';
import WelcomPage from "./pages/Welcome page/WelcomePage";
import LoginPage from "./pages/Authentification/LogIn";
import UserProfile from "./components/Profile/UserInfo";
import Settings from "./components/Profile/settings";


export default function App() {
  return (
    <BrowserRouter>
      <Router user={false} userRole={"client"} />
    </BrowserRouter>
    // <Settings />

    // <ReactiveBase
    //   url="https://appbase-demo-ansible-abxiydt-arc.searchbase.io"
    //   app="good-books-ds"
    //   credentials="04717bb076f7:be54685e-db84-4243-975b-5b32ee241d31"
    // >
    //   <div style={{ display: 'flex', flexDirection: 'row' }}>
    //     <div
    //       style={{
    //         display: 'flex',
    //         flexDirection: 'column',
    //         width: '30%',
    //         margin: '10px',
    //       }}
    //     >
    //       <div>
    //         <MultiList
    //           componentId="authorsfilter"
    //           dataField="authors.keyword"
    //           title="Filter by Authors"
    //           aggregationSize={5}
    //         />
    //       </div>
    //       <SingleRange
    //         componentId="ratingsfilter"
    //         dataField="average_rating"
    //         title="Filter by Ratings"
    //         data={[
    //           { start: 4, end: 5, label: '4 stars and up' },
    //           { start: 3, end: 5, label: '3 stars and up' },
    //         ]}
    //         defaultValue="4 stars and up"
    //       />
    //     </div>
    //     <div style={{ display: 'flex', flexDirection: 'column', width: '66%' }}>
    //       <SearchBox
    //         componentId="searchbox"
    //         dataField={[
    //           {
    //             field: 'authors',
    //             weight: 3,
    //           },
    //           {
    //             field: 'authors.autosuggest',
    //             weight: 1,
    //           },
    //           {
    //             field: 'original_title',
    //             weight: 5,
    //           },
    //           {
    //             field: 'original_title.autosuggest',
    //             weight: 1,
    //           },
    //         ]}
    //         placeholder="Search for books or authors"
    //       />
    //       <ReactiveList
    //         componentId="results"
    //         dataField="_score"
    //         size={6}
    //         pagination={true}
    //         react={{
    //           and: ['searchbox', 'authorsfilter', 'ratingsfilter'],
    //         }}
    //         render={({ data }) => (
    //           <ReactiveList.ResultCardsWrapper>
    //             {data.map((item) => (
    //               <ResultCard key={item._id}>
    //                 <ResultCard.Image src={item.image} />
    //                 <ResultCard.Title
    //                   dangerouslySetInnerHTML={{
    //                     __html: item.original_title,
    //                   }}
    //                 />
    //                 <ResultCard.Description>
    //                   {item.authors + ' ' + '*'.repeat(item.average_rating)}
    //                 </ResultCard.Description>
    //               </ResultCard>
    //             ))}
    //           </ReactiveList.ResultCardsWrapper>
    //         )}
    //       />
    //     </div>
    //   </div>
    // </ReactiveBase>
  );
}

