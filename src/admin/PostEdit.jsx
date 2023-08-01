import { Edit, RadioButtonGroupInput, SimpleForm, TextInput } from 'react-admin';
import { Typography } from "@mui/material";

const PostEdit = () => {
    const record1 = {id: 1, selected: null}
    const record2 = {id: 2, selected: null}

    return (
        <div>
            <Typography variant="h6" gutterBottom>Edit first record</Typography>
            <Edit>
                <SimpleForm record={record1}>
                    <TextInput source="id" name='text1'/>
                    <RadioButtonGroupInput
                        name="radio1"
                        source="selected"
                        choices={[
                            { id: '1', name: 'One' },
                            { id: '2', name: 'Two' },
                            { id: '3', name: 'Three' },
                        ]}
                    />
                </SimpleForm>
            </Edit>
            <Typography variant="h6" gutterBottom>Edit second record</Typography>
            <Edit>
                <SimpleForm record={record2}>
                    <TextInput source="id" name='text2'/>
                    <RadioButtonGroupInput
                        name="radio2"
                        source="selected"
                        choices={[
                            { id: '1', name: 'One' },
                            { id: '2', name: 'Two' },
                            { id: '3', name: 'Three' },
                        ]}/>
                </SimpleForm>
            </Edit>
        </div>
    )
}

export default PostEdit;