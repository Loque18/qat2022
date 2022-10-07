import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getSectionLayout } from 'src/layouts/section';

import ClasificationSection from 'src/sections/var/clasification';
import MintRulesSection from 'src/sections/var/mint-rules';
import DescriptionSection from 'src/sections/var/description';
import PrizesSection from 'src/sections/var/prizes';

const VarPage = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <ClasificationSection />
            <MintRulesSection />
            <DescriptionSection />
            <PrizesSection />
        </div>
    );
};

VarPage.getLayout = page => getPageTitleLayout(getMainLayout(getSectionLayout(page, 'Project VAR')), 'Var');

export default VarPage;
