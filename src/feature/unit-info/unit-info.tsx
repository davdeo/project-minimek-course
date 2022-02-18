import { FormControl, FormGroup, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';

const FACTIONS = [
    { value: 'cc', text: 'Capellan Confederation' },
    { value: 'dc', text: 'Draconis Combine' },
    { value: 'fs', text: 'Federated Suns' },
    { value: 'fwl', text: 'Free Worlds League' },
    { value: 'lc', text: 'Lyran Commonwealth' }
];

export const UnitInfo: React.FunctionComponent = () => {
    const factions = FACTIONS.map((faction) => <MenuItem value={faction.value}>{faction.text}</MenuItem>);

    return (
        <FormGroup sx={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <FormControl fullWidth>
                <TextField id="unit-name" label="Unit Name" variant="outlined" fullWidth />
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="affiliation-label">Affiliation</InputLabel>
                <Select labelId="affiliation-label" id="affiliation" label="Affiliation" fullWidth>
                    {factions}
                </Select>
            </FormControl>
        </FormGroup>
    );
};
