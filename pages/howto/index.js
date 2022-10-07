/* eslint-disable @next/next/no-img-element */
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getSectionLayout } from 'src/layouts/section';

import ScoreBanner from 'src/sections/howto/banner';
import ScoringSection from 'src/sections/howto/scoring-section';

const data = [
    {
        id: 1,
        name: 'Senegal',
        status: 'Lost',
        points: '0',
    },
    {
        id: 2,
        name: 'Saudi Arabia',
        status: 'Lost',
        points: '0',
    },
    {
        id: 3,
        name: 'South Korea',
        status: 'Lost',
        points: '0',
    },
    {
        id: 4,
        name: 'Germany',
        status: 'Won',
        points: '+3',
    },
    {
        id: 5,
        name: 'England',
        status: 'Won',
        points: '+3',
    },
    {
        id: 6,
        name: 'Portugal',
        status: 'Draw',
        points: '+1',
    },
    {
        id: 7,
        name: 'Wales',
        status: 'Draw',
        points: '+1',
    },
    {
        id: 8,
        name: 'Netherlands',
        status: 'Lost',
        points: '0',
    },
    {
        id: 9,
        name: 'Brazil',
        status: 'Draw',
        points: '+1',
    },
    {
        id: 10,
        name: 'Morocco',
        status: 'Won',
        points: '+3',
    },
    {
        id: 11,
        name: '',
        status: '',
        points: '+15',
    },
];

const HowtoPage = () => {
    return (
        <div className="" style={{ minHeight: '100vh' }}>
            <ScoreBanner />
            <ScoringSection />
            <section className="px-2">
                <h1 className="cooltitle has-text-centered has-font-qatar mb-6">Example</h1>
                <div>
                    <div className="columns">
                        <div className="column">
                            <img src="/media/team_ex.png" alt="" />
                        </div>
                        <div className="column">
                            <div className="ctable-wrapper is-flex is-justify-content-center">
                                <table className="cooltable2 table is-fullwidth is-hoverable has-bg-burgundy">
                                    <thead>
                                        <tr>
                                            <th className="subtitle has-text-centered has-text-gold has-font-qatar is-4">
                                                Player from
                                            </th>
                                            <th className="subtitle has-text-centered has-text-gold has-font-qatar is-4">
                                                Game Status
                                            </th>
                                            <th className="subtitle has-text-centered has-text-gold has-font-qatar is-4">
                                                Points
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(item => (
                                            <tr key={item.id}>
                                                <td className="subtitle has-text-centered has-text-cream has-font-qatar">
                                                    {item.name}
                                                </td>
                                                <td className="subtitle has-text-centered has-text-cream has-font-qatar">
                                                    {item.status}
                                                </td>
                                                <td className="subtitle has-text-centered has-text-cream has-font-qatar">
                                                    {item.points}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

HowtoPage.getLayout = page => getPageTitleLayout(getMainLayout(getSectionLayout(page, 'How to')), 'How to');

export default HowtoPage;
