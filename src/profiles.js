import React from 'react';
import { List, Datagrid, TextField, ChipField, DateField, Filter, TextInput, ReferenceInput, SelectInput} from 'react-admin';

const ProfileFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Computer" source="clientId" reference="profiles" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const ProfileList = props => (
    <List filters={<ProfileFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="group" />
            <TextField source="name" />
            <TextField source="macAddress" />
            <TextField source="ipIntranet" />
            <TextField source="ipDCN" />
            <ChipField source="status" />
            <TextField source="cert" />
            <TextField source="servicesRunning" />
            <TextField source="clientId" />
            <DateField source="lastPing" />
            <DateField source="firstPing" />
            <TextField source="cpu" />
            <TextField source="ram" />
            <TextField source="os" />
            <TextField source="osVersion" />
            <TextField source="officeVersion" />
            <TextField source="platform" />
        </Datagrid>
    </List>
);