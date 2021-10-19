import React from 'react'
import styled from "@emotion/styled";
import "./Company.css"

export const Company = () => {
    return (
        <div className="company-grid" style={{ backgroundImage: "url(/BG.svg)" }}>
            <div className="company-left">
                <h2 className="company-title">Company Summary</h2>
                <img
                    src="Image.svg"
                    className="company-img"
                    alt="company-summary"
                />
            </div>
            <div className="company-right">

                <Card>
                    <div className="small-grid">
                        <div className="small-left">
                            <Icon
                                src="Image.svg"
                            />
                        </div>
                        <div className="small-right">
                            <h4>Personell Headhunting</h4>
                            <p className="company-text">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="small-grid">
                        <div className="company-left">
                            <Icon />
                        </div>
                        <div className="company-right">
                            <h4>Personell Headhunting</h4>
                            <p className="company-text">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="small-grid">
                        <div className="company-left">
                            <Icon />
                        </div>
                        <div className="company-right">
                            <h4>Personell Headhunting</h4>
                            <p className="company-text">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Card>


            </div>
        </div>
    );
};

//export default Company;

const Card = styled.div`
    margin-top: 70px;
    background-color: white;
    max-width: 770px;
    min-width: 760px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 40%;
    border-radius: 5px;
    height: 25%;
    @media (max-width: 900px) {
        min-width: 0px;
        width: 90%;
    }
`;

const Icon = styled.img`
    width: 180px;
`;
