import React from 'react';
import { TreeItem, TreeView } from '@mui/lab';
import { Apps, GridView, Person } from '@mui/icons-material';

export const UnitOrganization: React.FunctionComponent = () => {
    const unitOrganisationData = {
        companyLabel: 'Black Widow Company',
        lances: [
            {
                lanceLabel: 'Command Lance',
                pilots: [
                    { pilotLabel: 'Cpt. Natasha Kerensky - WHM-6R Warhammer' },
                    { pilotLabel: 'Colin Maclaren - MAD-3R Marauder' },
                    { pilotLabel: 'Lynn Sheridan - CRD-3R Crusader' },
                    { pilotLabel: 'John Hayes - GRF-1N Griffin' }
                ]
            },
            {
                lanceLabel: 'Fire Lance',
                pilots: [
                    { pilotLabel: 'Lt. Takiro Ikeda - ARC-2R Archer' },
                    { pilotLabel: 'Miklos Delius - ARC-2R Archer' },
                    { pilotLabel: 'Nikolai Koniev - WSP-1A Wasp' },
                    { pilotLabel: 'Alex Ward - STG-3R Stinger' }
                ]
            },
            {
                lanceLabel: 'Recon Lance',
                pilots: [
                    { pilotLabel: 'Lt. John "Gentleman Johnny" Clavell - RFL-3N Rifleman' },
                    { pilotLabel: 'Piet Nichols - PXH-1K Phoenix Hawk' },
                    { pilotLabel: 'Simon Fraser - STG-3R Stinger' },
                    { pilotLabel: 'Mohammar Jahan - STG-3R Stinger' }
                ]
            }
        ]
    };

    let nodeIDCounter = 1;
    const nodes = [`${nodeIDCounter}`];
    const organisationTree = (
        <TreeItem nodeId={`${nodeIDCounter}`} label={unitOrganisationData.companyLabel} icon={<Apps />}>
            {unitOrganisationData.lances.map((lance) => {
                nodeIDCounter += 1;
                nodes.push(`${nodeIDCounter}`);

                return (
                    <TreeItem nodeId={`${nodeIDCounter}`} label={lance.lanceLabel} icon={<GridView />}>
                        {lance.pilots.map((pilot) => {
                            nodeIDCounter += 1;
                            nodes.push(`${nodeIDCounter}`);

                            return <TreeItem nodeId={`${nodeIDCounter}`} label={pilot.pilotLabel} icon={<Person />} />;
                        })}
                    </TreeItem>
                );
            })}
        </TreeItem>
    );

    return <TreeView defaultExpanded={nodes}>{organisationTree}</TreeView>;
};
