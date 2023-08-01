// in src/admin/index.tsx
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import PostEdit from "./PostEdit";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={ListGuesser} edit={PostEdit} />
        <Resource name="comments" list={ListGuesser} />
    </Admin>
);

export default App;