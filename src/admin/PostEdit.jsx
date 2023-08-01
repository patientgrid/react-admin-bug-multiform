import { Edit, RadioButtonGroupInput, SimpleForm } from 'react-admin';
import { Typography } from "@mui/material";

const PostEdit = () => {
    const record1 = {id: 1, selected: null}
    const record2 = {id: 2, selected: null}

    return (
        <div>
            <Edit>
                <SimpleForm record={record1}>
                    <Typography variant="h6" gutterBottom>Edit first record</Typography>
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
            <Edit>
                <SimpleForm record={record2}>
                    <Typography variant="h6" gutterBottom>Edit second record</Typography>
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