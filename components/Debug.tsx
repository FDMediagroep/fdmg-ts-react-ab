import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

interface Props {
    name: string;
    debugChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    open: boolean;
    handleClose: () => void;
    handleRemoveExperiment: (experimentName: string) => void;
    variant: number;
    [x: string]: any;
}

Modal.setAppElement('#__next');

export function Debug(props: Props) {
    function handleRemoveExperiment() {
        props.handleRemoveExperiment(props.name);
    }

    return (
        <>
            <Modal
                isOpen={props.open}
                onRequestClose={props.handleClose}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <section>
                        <h2>
                            {props.name}
                            <span
                                onClick={handleRemoveExperiment}
                                title="Remove experiment from cookie"
                            >
                                [x]
                            </span>
                        </h2>
                        {props.children.map(
                            (child: React.ReactElement, idx: number) => (
                                <label key={child.props.name}>
                                    <input
                                        type="radio"
                                        value={idx}
                                        name={props.name}
                                        onChange={props.debugChange}
                                        checked={idx === props.variant}
                                    />
                                    {child.props.name}
                                </label>
                            )
                        )}
                    </section>
                </div>
            </Modal>
        </>
    );
}
