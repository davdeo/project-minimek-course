import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers/root-reducer';

function mapState(state: State): StateProps {
    return {
        data: state.testReducer.data
    };
}

interface StateProps {
    data: number;
}

type Props = StateProps;

const SampleComponent: FunctionComponent<Props> = ({ data }: Props) => {
    return <div>Data from Redux: {data}</div>;
};

export default connect(mapState)(SampleComponent);
