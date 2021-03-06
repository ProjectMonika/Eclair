import {h} from 'hyperapp';
import {Link} from '@hyperapp/router';
import {Cake, Hat, Rocket} from '../components';

export const Intro = (_, actions) => (
    <div key="intro" data-hyperapp-root>
        <div class="bg-green intro-container">
            <div class="intro-wrapper">
                <h1 class="text-center white f00-light">
                    Welcome to &Eacute;clair
                    <Cake/>
                </h1>

                <p class="text-center white f3">
                    A dialogue generator for <a href="https://www.monikaafterstory.com/" target="blank" class="inline-link">Monika After Story</a>.
                </p>
                <p class="text-center white f2 py-4">
                    Pick a mode below to get started<br/>
                    making your dialogue!
                </p>

                <div class="columns">
                    <div class="one-half-lg-full-sm column pr-4 pl-0">
                        <Link to="/basic">
                            <button class="btn btn-outline text-normal btn-intro f2" onclick={() => actions.setMode('basic')}>
                                <Hat class="mr-2"/>
                                Basic
                            </button>
                        </Link>
                        <p class="white text-left mt-2 f4">
                            If you're new to Monika After Story, and want to take it easy.
                            Training wheels inluded.
                        </p>
                    </div>

                    <div class="one-half-lg-full-sm column pl-4 pr-0">
                        <Link to="/advanced">
                            <button class="btn btn-outline text-normal btn-intro f2" onclick={() => actions.setMode('advanced')}>
                                Advanced
                                <Rocket class="ml-2"/>
                            </button>
                        </Link>
                        <p class="white text-left mt-2 f4">
                            If you're a discerning wizard who wants all the power.
                            We got your back fam.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="intro-footer white h5 text-center pb-2">
            Broguht you to by <a href="https://github.com/vermicellibug" class="inline-link" target="_blank">vermicellibug</a> and the <a href="https://github.com/ProjectMonika" class="inline-link" target="_blank">Evergreen team</a>.
            <br/>
            This thing is <a href="https://github.com/ProjectMonika/Eclair" class="inline-link" target="_blank">open source</a> as well!
        </div>
    </div>
);