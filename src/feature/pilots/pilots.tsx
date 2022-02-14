import React from 'react';
import {
    Box,
    FormControl,
    FormGroup,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from '@mui/material';

const RANKS = [
    { value: 'Private', text: 'Private' },
    { value: 'Corporal', text: 'Corporal' },
    { value: 'Sergeant', text: 'Sergeant' },
    { value: 'Lieutenant', text: 'Lieutenant' },
    { value: 'Captain', text: 'Captain' },
    { value: 'Major', text: 'Major' },
    { value: 'Colonel', text: 'Colonel' }
];

const MECHS = [{ value: 'WHM-6R', text: 'Warhammer WHM-6R' }];

export const Pilots: React.FunctionComponent = () => {
    const ranks = RANKS.map((rank) => <MenuItem value={rank.value}>{rank.text}</MenuItem>);
    const mechs = MECHS.map((mech) => <MenuItem value={mech.value}>{mech.text}</MenuItem>);

    const pilot1 = { name: 'Natasha Kerensky', rank: 'Colonel', age: 34, skills: '2/3', mech: 'WHM-6R' };

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography sx={{ marginBottom: '15px' }} variant="h5">
                        Pilot List
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead sx={{ backgroundColor: 'lightgrey' }}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Rank</TableCell>
                                    <TableCell align="right">Age</TableCell>
                                    <TableCell align="right">Skills</TableCell>
                                    <TableCell align="right">Mech</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key={pilot1.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {pilot1.name}
                                    </TableCell>
                                    <TableCell align="right">{pilot1.rank}</TableCell>
                                    <TableCell align="right">{pilot1.age}</TableCell>
                                    <TableCell align="right">{pilot1.skills}</TableCell>
                                    <TableCell align="right">{pilot1.mech}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ marginBottom: '15px' }} variant="h5">
                        Pilot Details
                    </Typography>
                    <Paper sx={{ padding: '15px' }} variant="outlined">
                        <FormGroup sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <FormControl fullWidth>
                                <TextField id="pilot-name" label="Name" variant="outlined" fullWidth />
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id=">rank-label">Rank</InputLabel>
                                <Select labelId="rank-label" id="rank" label="Rank" fullWidth>
                                    {ranks}
                                </Select>
                            </FormControl>
                            <FormControl sx={{ width: '50%' }}>
                                <TextField
                                    id="age"
                                    label="Age"
                                    variant="outlined"
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]' }}
                                />
                            </FormControl>
                            <FormControl sx={{ width: '50%' }}>
                                <TextField
                                    id="gunnery"
                                    label="Gunnery"
                                    variant="outlined"
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]' }}
                                />
                            </FormControl>
                            <FormControl sx={{ width: '50%' }}>
                                <TextField
                                    id="piloting"
                                    label="Piloting"
                                    variant="outlined"
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]' }}
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id=">mech-label">Mech</InputLabel>
                                <Select labelId="mech-label" id="mech" label="Mech" fullWidth>
                                    {mechs}
                                </Select>
                            </FormControl>
                        </FormGroup>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};
