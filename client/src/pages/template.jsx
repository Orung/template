import React from 'react'
import DefaultWrapper from '../layouts/DefaultWrapper'
// import img from '../assets/images/templates/denrintag-moimoi.png'
// import { templatesData } from '../utils/templatesData'

import templatesData from '../utils/templatesData'

const Index = () => {
    return (
        <DefaultWrapper>
            <div className="template text-red-500">
                <div className="text-center">
                    <h1 className="text-lg md:text-base header-title">
                        Beautiful Recipe templates for your print outs
                    </h1>
                    <h4 className="how-it-work">How it works?</h4>
                    <p className="p-recipe">
                        Here are three easy simple steps to generating your
                        customized food recipe
                    </p>
                </div>
                <div className="flex mt-50 mb-9">
                    <div>
                        <p className="number-section m-auto flex flex-col justify-center items-center w-20 font-bold rounded relative text-white">
                            01
                        </p>
                        <div className="step-all">
                            <h5 className="text-center text-xl font-semibold text-change step">
                                Select Template
                            </h5>
                            <p className="text-center text-xs">
                                Choose a template from the samples below, Click
                                on Edit template and you will be directed to
                                choose a colour and edit your information.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="number-section m-auto flex flex-col justify-center items-center w-20 font-bold rounded relative text-white">
                            02
                        </p>
                        <div className="step-all">
                            <h5 className="text-center text-xl font-semibold text-change step">
                                Choose a colour palette
                            </h5>
                            <p className="text-center text-xs">
                                You will be directed on how to choose a matching
                                colour to your Template Choosen.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="number-section text-three m-auto flex flex-col justify-center items-center w-20 font-bold rounded relative text-white">
                            03
                        </p>
                        <div className="step-all">
                            <h5 className="text-center text-xl font-semibold text-change step">
                                Edit Template and Save.
                            </h5>
                            <p className="text-center text-xs">
                                After Editing your template, You will have to
                                choose a prefered colour scheme to use for your
                                template.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <a href="">Templates</a>
                </div> */}
                {/* <div className='text-center m-auto sizing'>
                        <div className="img-section p-4">
                            <div className='flex justify-center items-center'>
                                <img src={img} alt="The"/>
                            </div>
                            <div>
                                <h3>template.name</h3>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>Use Template</div>
                            <div>Save template</div>
                        </div>
                    </div> */}
                <div className="md:grid grid-cols-2 gap-4 mt-75">
                    {templatesData.map(template => {
                        return (
                            <div key={template.id} className="mb-20">
                                <div className="text-center m-auto sizing">
                                    <div className="img-section p-4">
                                        <div className="flex justify-center items-center">
                                            <img
                                                src={template.image}
                                                alt="The"
                                            />
                                        </div>
                                        <div>
                                            <h3 className='template-title'>{template.name}</h3>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mt-6">
                                        <div><button className='btn-use'>Use Template</button></div>
                                        <div>
                                            <button className='btn-save'>Save template</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </DefaultWrapper>
    )
}

export default Index
