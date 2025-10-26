import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Grid, Card, CardContent } from '@mui/material';
import HealingIcon from '@mui/icons-material/Healing';
import ScienceIcon from '@mui/icons-material/Science';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CitationLink from '../components/UI/CitationLink';

export const PAGE_CONTENT = {

    // Home Page
    HOME: {
        title: "Global Health & Artificial Intelligence",
        tagline: "Discover the future of healthcare through advanced AI technology",
        body: (
            <Box>
                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    1. Overview of Global Health
                </Typography>

                <Typography variant="body1" paragraph>
                    Global health is a field of research and practice that prioritizes improving health and achieving health equity for all people worldwide. This concept emphasizes the interdependence between nations in addressing health challenges, from global pandemics to climate change <CitationLink citationKey="CITE_WHO_01" />.
                </Typography>

                <Typography variant="body1" paragraph>
                    In the current context, global health is not just a matter for individual countries but a shared responsibility of all humanity. Events like the COVID-19 pandemic have clearly demonstrated that no country can face health challenges independently.
                </Typography>

                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    2. The Role of Artificial Intelligence in Healthcare
                </Typography>

                <Typography variant="body1" paragraph>
                    Artificial Intelligence (AI) is revolutionizing the healthcare field through diverse applications, from medical imaging to drug development. AI helps healthcare professionals make more accurate, faster, and more efficient decisions <CitationLink citationKey="CITE_AI_02" />.
                </Typography>

                <Typography variant="body1" paragraph>
                    AI technologies such as machine learning, deep learning, and natural language processing are being integrated into healthcare systems to improve care quality and reduce treatment costs. This is particularly important in addressing global health challenges.
                </Typography>

                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    3. Interdependence in Healthcare Systems
                </Typography>

                <Typography variant="body1" paragraph>
                    Healthcare systems worldwide are increasingly interdependent through data sharing, research, and resource allocation. This interdependence creates both opportunities and challenges in ensuring health for all people.
                </Typography>

                <Typography variant="body1" paragraph>
                    International cooperation in healthcare has become more important than ever, particularly in preventing and controlling infectious diseases, as well as in developing and distributing vaccines and treatments.
                </Typography>
            </Box>
        )
    },

    // AI Applications Page
    AI_APPLICATIONS: {
        title: "AI Applications in Global Health",
        body: (
            <Box>

                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    1. Diagnostic Accuracy and Image Analysis
                </Typography>

                <Typography variant="body1" paragraph>
                    Artificial intelligence has achieved remarkable diagnostic accuracy across multiple medical imaging modalities, with performance frequently matching or exceeding human expert capabilities. In digital pathology, a systematic review and meta-analysis of 100 studies encompassing over 152,000 whole slide images revealed AI achieving mean sensitivity of 96.3% and mean specificity of 93.3% across diverse diseases. These results demonstrate AI's capacity to provide highly accurate diagnoses across various pathological conditions.
                </Typography>

                <Typography variant="body1" paragraph>
                    In mammography, AI systems demonstrate exceptional breast cancer detection capabilities. Deep learning algorithms achieve up to 98.7% accuracy in lung cancer detection on CT scans, while AI-powered mammography screening reduces false positives by 37.3% and unnecessary biopsies by 27.8% while maintaining high sensitivity. Critically, AI flagged up to 49.8% of interval cancers missed by human readers, demonstrating its value in catching malignancies that evade initial detection.
                </Typography>

                <Typography variant="body1" paragraph>
                    Specific AI architectures excel in different applications. YOLOv11 models reached 96.26% precision in detecting correct findings and 95.76% accuracy in outlining tumor locations for lung cancer screening. Convolutional neural networks analyzing mammograms achieved 88% accuracy for classifying benign versus malignant tumors, surpassing radiologist accuracy of 83%. For diabetic retinopathy screening, AI systems achieved 95.2% accuracy in identifying retinal disorders.
                </Typography>

                <Typography variant="body1" paragraph>
                    The complementary strengths of AI and human radiologists create synergistic diagnostic capabilities. While radiologists possess approximately 80 trillion synaptic connections enabling deep adaptability and perceptual sensitivity, AI models with around 3 trillion parameters excel in processing large data volumes rapidly with consistent accuracy. Radiologists handle moderate data volumes with nuanced interpretation, whereas AI systems process vast quantities quickly, proving advantageous for tasks requiring speed and consistency. The integration approach—combining AI efficiency with human clinical judgment—offers the most comprehensive diagnostic pathway.
                </Typography>

                <Typography variant="body1" paragraph>
                    However, significant challenges persist. Image quality substantially affects AI performance; in diabetic retinopathy screening, up to 20% of fundus images proved ungradable by AI systems due to poor quality. In femur segmentation, accuracy dropped from 98.84% to 89.36% without noise reduction filters. Additionally, 99% of studies in the digital pathology meta-analysis had at least one area at high or unclear risk of bias or applicability concerns, highlighting the need for more rigorous evaluation standards before widespread clinical deployment.
                </Typography>

                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    2. Personalized Treatment Planning and Precision Medicine
                </Typography>

                <Typography variant="body1" paragraph>
                    AI transforms treatment planning through sophisticated analysis of multi-dimensional patient data, enabling truly individualized therapeutic approaches. In precision oncology, AI systems analyze multi-omics data (genomic, transcriptomic, proteomic, metabolomic) combined with clinical, pathological, imaging, and treatment response information to predict individual patient outcomes and optimize therapy selection.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    Pharmacogenomics and Drug Response Prediction
                </Typography>

                <Typography variant="body1" paragraph>
                    AI-enhanced pharmacogenomics represents a paradigm shift from static germline variant analysis to dynamic, context-dependent prediction. Approximately 95% of individuals carry at least one actionable pharmacogenomic variant, yet traditional approaches fail to consistently predict drug responses. Multi-omics integration addresses this limitation by capturing genomic variants, epigenetic modifications, gene expression, protein levels, and metabolic context that collectively influence treatment outcomes.
                </Typography>

                <Typography variant="body1" paragraph>
                    Deep learning frameworks like DIPK (Drug Interaction Prediction based on prior Knowledge) outperform existing methods in predicting cellular drug responses across both GDSC and CCLE datasets, demonstrating robust generalizability on single-cell RNA sequencing data. In oncology, adding gene expression profiles to genomic variants improved warfarin dose prediction by 8-12% in explained variance. Advanced AI methods including graph neural networks, variational autoencoders, and large language models enhance drug response prediction and clinical decision support.
                </Typography>

                <Typography variant="body1" paragraph>
                    Real-world pharmacogenomic applications demonstrate measurable clinical benefits. Pre-treatment DPYD genotyping in patients receiving fluoropyrimidines has nearly eliminated severe toxicity, reducing hospitalization rates and preventing treatment-related deaths. CYP2C19 loss-of-function alleles linked to increased cardiovascular events in clopidogrel-treated patients prompted guideline shifts toward alternative antiplatelet therapy. Broader use of multi-gene pharmacogenomic panels reduced serious adverse drug reactions and hospitalizations across multiple specialties.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    Clinical Decision Support Systems
                </Typography>

                <Typography variant="body1" paragraph>
                    AI-based Clinical Decision Support Systems (AI-CDSS) demonstrate significant improvements across medical specialties. In primary care, AI-CDSS enhanced diagnostic precision and shortened consultation times. Oncology systems showed dramatic improvements in sensitivity for early cancer detection and improved treatment planning. Emergency medicine applications reduced triage time and improved patient flow, though challenges with real-time data integration and alert fatigue persist.
                </Typography>

                <Typography variant="body1" paragraph>
                    Successful implementations include Mayo Clinic's AI-driven cardiology program, which uses machine learning to analyze electrocardiogram data, identifying patients at risk of developing atrial fibrillation even before symptoms appear. Memorial Sloan Kettering Cancer Center deployed oncology AI systems that analyze patient data to recommend tailored therapies. However, adoption success hinges on factors including clinician trust (influenced by system transparency and explainability), usability and workflow integration, performance expectancy, and perceived trustworthiness.
                </Typography>

                <Typography variant="body1" paragraph>
                    A recent study of AI-CDSS implementation in clinical trial settings found it enhanced prescribing confidence and improved decision-making. Systems prioritizing transparency, interpretability, and clinician feedback loops achieved more positive integration, while those lacking explainability faced resistance. The tension between technological sophistication and clinician usability remains a persistent theme requiring careful attention during system design and deployment.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    Challenges and Future Directions
                </Typography>

                <Typography variant="body1" paragraph>
                    Despite impressive capabilities, several challenges must be addressed for widespread AI adoption in diagnosis and treatment. Data quality, fragmented datasets, and outdated legacy systems prevent effective integration. Lack of standardization makes training, testing, and surveillance of AI tools difficult. Algorithm transparency remains critical—systems operating as "black boxes" without clear reasoning for outputs face persistent clinician skepticism.
                </Typography>

                <Typography variant="body1" paragraph>
                    Ethical considerations include algorithmic bias perpetuating healthcare disparities, data privacy concerns, and questions about liability when AI recommendations contribute to adverse outcomes. Regulatory frameworks must balance innovation with safety, ensuring rigorous validation while avoiding stifling development. Continuous monitoring through lifecycle management approaches incorporating recurrent postmarket performance assessment will identify how AI performs across diverse populations and healthcare contexts.
                </Typography>

                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    3. Drug Discovery and Development: Accelerating Innovation
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    Dramatic Timeline Reduction
                </Typography>

                <Typography variant="body1" paragraph>
                    AI is fundamentally transforming pharmaceutical development by dramatically compressing timelines. Traditional drug development from discovery to market approval averages 12 years, with the preclinical phase alone consuming 6.5 years. AI is reducing overall development from over 10 years to potentially 3-6 years, with some estimates suggesting reduction to 7-9 years or even 1-2 years for certain stages.
                </Typography>

                <Typography variant="body1" paragraph>
                    This acceleration stems from AI's ability to rapidly process massive volumes of biological and chemical data, identifying potential drug candidates in a fraction of traditional timelines. Automation of repetitive tasks streamlines research processes, allowing scientists to focus on complex problems. AI algorithms quickly validate biological targets, ensuring only the most promising candidates are pursued.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    Landmark Case Studies
                </Typography>

                <Typography variant="body1" paragraph>
                    Real-world examples demonstrate AI's transformative impact:
                </Typography>

                <Typography variant="body1" paragraph>
                    <strong>Insilico Medicine</strong> leveraged AI to identify a novel drug target for idiopathic pulmonary fibrosis and generate a promising candidate molecule (ISM001-055) in just a few months—a process traditionally requiring years. Their AI-designed drug advanced from hypothesis to IND candidate in approximately 18 months at roughly 10% of traditional program costs. The molecule entered Phase I trials in 2021 and showed positive Phase IIa results by late 2023.
                </Typography>

                <Typography variant="body1" paragraph>
                    <strong>Exscientia</strong> developed DSP-1181, an obsessive-compulsive disorder therapy, using an AI-driven platform. They brought the compound from project start to clinical trial in only 12 months compared to approximately 5 years normally. The AI system dramatically reduced compounds requiring synthesis and testing, finding a promising candidate after exploring only 350 compounds versus approximately 2,500 typically—an 85% reduction. This represented the first AI-created drug to enter Phase I trials in 2020.
                </Typography>

                <Typography variant="body1" paragraph>
                    <strong>BenevolentAI</strong> discovered in 48 hours that baricitinib, an existing arthritis drug, could treat COVID-19. Their AI knowledge graph enabled rapid drug repurposing. By November 2020, the drug received FDA Emergency Use Authorization, compressing what could have been multi-year development into months—the first AI-driven repurposed therapy widely used in a pandemic setting.
                </Typography>

                <Typography variant="body1" paragraph>
                    <strong>Healx</strong> reduced rare disease drug development timelines by 50%, moving programs like Fragile X syndrome from discovery to preclinical in just 24 months, potentially reducing the typical 12-14 year timeline to 6-8 years.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    AlphaFold and Protein Structure Prediction
                </Typography>

                <Typography variant="body1" paragraph>
                    AlphaFold represents a revolutionary breakthrough in drug discovery, transforming protein structure prediction from a years-long laboratory process into a computational task completing in under an hour. By accurately predicting 3D protein structures from amino acid sequences, AlphaFold enables researchers to design drugs that specifically target proteins, leading to more effective and safer treatments.
                </Typography>

                <Typography variant="body1" paragraph>
                    AlphaFold's accurate structure predictions enable researchers to design drugs that precisely fit into active sites of target proteins, inhibiting or enhancing their function. The system aids in exploring protein-protein interactions crucial for understanding disease mechanisms and developing targeted therapies. By predicting 3D structures of protein complexes, researchers identify potential binding sites and design molecules that disrupt or enhance interactions.
                </Typography>

                <Typography variant="body1" paragraph>
                    A study published in Science demonstrated that AlphaFold2-predicted structures have the same ability to guide virtual drug screening as experimental structures for examined drug targets. Researchers estimate that in approximately one-third of cases, an AlphaFold-predicted structure could significantly expedite projects. AlphaFold 3 has significantly enhanced capabilities for drug design, particularly in accurate prediction of molecular interactions including protein-ligand binding. The integration of Cognit's genomic and transcriptomic insights with AlphaFold 3's structural predictions creates powerful synergy covering the entire drug development spectrum from early-stage target discovery to optimization of therapeutic interactions.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    Clinical Trials Optimization
                </Typography>

                <Typography variant="body1" paragraph>
                    AI dramatically improves clinical trial efficiency through multiple mechanisms. McKinsey analysis of biopharma data from AI/ML pilots indicates AI can identify optimal trial sites, boost enrollment by 10-20%, and predict real-time enrollment performance, allowing earlier, more proactive interventions. On average, applying these techniques across assets and therapeutic areas compressed development timelines by six months per asset.
                </Typography>

                <Typography variant="body1" paragraph>
                    Generative AI-powered digitalized processes like auto-drafting trial documents cut process costs by up to 50%. Studies show 20% increase in NPV from gen-AI-enhanced health authority interactions driven by improved data quality and signal management. Additionally, gen AI enabled more than 12 months of trial acceleration through optimized site selection and rapid copiloted decision-making.
                </Typography>

                <Typography variant="body1" paragraph>
                    AI enhances patient selection by analyzing electronic health records to identify patients meeting specific eligibility criteria and likely to participate, reducing time and cost associated with recruitment. Digital twins—virtual patient models trained to simulate treatment responses—enable researchers to test drug efficacy and predict outcomes without conducting in-person trials for every scenario. AstraZeneca achieved approximately 25% reduction in trial duration by identifying optimal doses and patient subgroups faster through AI in immuno-oncology trial design.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    Success Rates and Clinical Validation
                </Typography>

                <Typography variant="body1" paragraph>
                    AI-discovered drugs demonstrate substantially higher success rates in clinical trials. Phase I clinical trials of AI-discovered molecules show 80-90% success rates, substantially higher than historic industry averages of 40-65% for traditionally discovered drugs. This dramatic improvement suggests AI's pattern recognition capabilities effectively identify compounds with higher probability of succeeding through clinical development.
                </Typography>

                <Typography variant="body1" paragraph>
                    As of early 2024, at least 31 AI-discovered drug candidates were in human trials across leading AI-driven biotech companies, with this number growing rapidly. Partnerships between traditional pharma and AI tech firms increased approximately 30% from 2022 to 2024. Examples include Pfizer partnering with AI startups for immuno-oncology, Sanofi investing $180 million in AI collaboration with Owkin to identify cancer biomarkers, and Merck working with DeepMind on protein-folding AI to aid drug design.
                </Typography>

                <Typography variant="body1" paragraph>
                    Collectively, over 800 AI-driven pharma startups raised over $59 billion by 2022 to fuel innovation. The FDA has authorized 1,016 AI-enabled medical devices representing 736 unique devices as of mid-2024, with 221 devices receiving authorization in 2024 alone. However, only 2.4% of devices with clinical studies were supported by randomized controlled trial evidence, and 55.9% reported clinical performance studies at approval time while 24.1% explicitly stated no clinical performance studies were conducted.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    Limitations and Considerations
                </Typography>

                <Typography variant="body1" paragraph>
                    Despite impressive advances, challenges remain. AI's benefits in drug discovery require high-quality, diverse training data—biased or incomplete datasets yield unreliable predictions. Algorithm transparency remains crucial; pharmaceutical companies and regulators need interpretable models to understand why specific compounds are recommended. Validation in clinical settings is essential; computational predictions must be confirmed through rigorous experimental testing and clinical trials. Integration with existing pharmaceutical workflows requires substantial organizational change and investment in infrastructure and training.
                </Typography>

                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    4. Public Health Surveillance: Early Warning and Outbreak Prediction
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    AI-Powered Surveillance Systems
                </Typography>

                <Typography variant="body1" paragraph>
                    AI-based early warning systems transform infectious disease surveillance by processing vast amounts of diverse data from sources including medical records, social media posts, news reports, and environmental monitoring devices. By analyzing these large volumes of varied data, AI provides more complete and timely understanding of disease dynamics than traditional surveillance methods.
                </Typography>

                <Typography variant="body1" paragraph>
                    AI detects early warning signals through multiple mechanisms: identifying anomalies (deviations from expected patterns) that may signal emerging public health threats; finding patterns suggesting disease outbreak onset, allowing faster recognition; and detecting unusual spikes in online searches for specific symptoms combined with increased social media posts about illness, potentially indicating outbreaks days before official case counts rise.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    BlueDot
                </Typography>

                <Typography variant="body1" paragraph>
                    BlueDot, a Canadian AI-powered platform, gained international attention for its early detection of COVID-19. The system identified "unusual pneumonia" cases and issued notifications about one week prior to official acknowledgment by epidemiologists and traditional surveillance systems that a novel coronavirus had emerged. BlueDot detected these signals as early as December 2019, before any international organization.
                </Typography>

                <Typography variant="body1" paragraph>
                    BlueDot employs a Feature Manipulation Engine (FME) to obtain and integrate health-related data from various sources including government databases, health forums, official notifications, electronic health records from disease control centers, news reports, social media, and search engine queries. The system uses AI with natural language processing in 65 languages, human moderation, transport network modeling, and clustering tools for hotspot identification. It provides near real-time analysis, continuously tracking over 190 different infectious diseases and syndromes.
                </Typography>

                <Typography variant="body1" paragraph>
                    BlueDot also predicted potential COVID-19 spread to other countries based on factors including population density, perceived case density, historical data analysis, and available air travel data. The company protects over 840 million people worldwide through its intelligence services. Users report saving more than 3 months of time annually by receiving highly curated alerts rather than unfiltered data.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    HealthMap
                </Typography>

                <Typography variant="body1" paragraph>
                    HealthMap is a fully automated system monitoring health events including infectious diseases by using natural language processing to analyze real-time data from web sources such as news reports and health forums. The system performs hourly data collection and detected COVID-19 signals on December 30, 2019—one day before official Chinese acknowledgment.
                </Typography>

                <Typography variant="body1" paragraph>
                    Primary input data includes news media (Google News, etc.), official reports (WHO, ProMED-mail), web sources (blogs), social media, and user eyewitness reports. AI techniques include automated classification (Fisher-Robinson Bayesian filtering) and NLP (text processing algorithms for identifying, classifying, and mapping events). Key outputs feature geographic mapping of events, linked reports, alerts by disease/syndrome, timelines, and a mobile app called "Outbreaks Near Me". Reported accuracy of automated categorization reached 84% in earlier literature.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    EPIWATCH
                </Typography>

                <Typography variant="body1" paragraph>
                    EPIWATCH is an AI-based system harnessing open-source data to generate automated early warnings of epidemics worldwide. A public dashboard provides analytics with searchable and sortable outbreak reports, analytics capability, and geographic information systems mapping functionality free of charge.
                </Typography>

                <Typography variant="body1" paragraph>
                    The system uses AI-based event filtering, NLP, and named entity recognition algorithms to automatically detect data points within scanned articles. A second AI sub-system employing bidirectional encoder representations from transformers (BERT) assesses with 88.2% accuracy whether articles contain relevant outbreak information. EPIWATCH detected COVID-19 signals on the day of WHO announcement.
                </Typography>

                <Typography variant="body1" paragraph>
                    Additional functionality includes risk analysis tools such as FLUCAST (forecasts severity of emerging influenza seasons), EPIRISK (prioritizes serious developing epidemics), and ORIGINS (provides insights into epidemic origins). The system captures specific infectious diseases and clinical syndromes that may signal new and emerging infections, ensuring users are not overwhelmed with impractical data volumes and providing more reliable outbreak predictions.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    ProMED-mail
                </Typography>

                <Typography variant="body1" paragraph>
                    ProMED-mail represents one of the oldest digital surveillance systems, detecting COVID-19 early. While not purely AI-based, it demonstrated effectiveness in identifying potential risks 7-10 days before official warnings. During H1N1 and Zika outbreaks, ProMED appeared equally efficient in detecting threats at early stages. The system provides detailed, human-curated reports based on expert analysis of incoming information.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    Predictive Modeling and Forecasting Accuracy
                </Typography>

                <Typography variant="body1" paragraph>
                    AI-driven predictive analytics play crucial roles in monitoring epidemiological trends, enabling public health officials to anticipate and respond to potential outbreaks. Using historical data, environmental factors, and real-time surveillance information, machine learning models forecast spread and impact of infectious diseases with increasing accuracy.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    COVID-19 Forecasting Performance
                </Typography>

                <Typography variant="body1" paragraph>
                    Multiple AI approaches demonstrated superior accuracy compared to traditional statistical methods for COVID-19 prediction. Long Short-Term Memory (LSTM) artificial neural networks showed the best accuracy among investigated models for predicting total cases in eight countries including Switzerland, Finland, Germany, Denmark, France, Turkey, Belgium, and the United Kingdom. Fractional nonlinear grey Bernoulli models showed the best prediction accuracy in comparative studies.
                </Typography>

                <Typography variant="body1" paragraph>
                    A new AI tool named PandemicLLM, developed by Johns Hopkins researchers, accurately predicted disease patterns and hospitalization trends one to three weeks out, consistently outperforming other methods including the highest performing ones on the CDC's CovidHub. The model relies on four data types: state-level spatial data (demographics, healthcare system, political affiliations); epidemiological time series (reported cases, hospitalizations, vaccine rates); public health policy data (stringency and types of government policies); and genomic surveillance data (variant characteristics and prevalence).
                </Typography>

                <Typography variant="body1" paragraph>
                    However, systematic analysis of US CDC COVID-19 forecasting models revealed mixed results. Models achieving best performance ("IQVIA_ACOE-STAN," "USACE-ERDC_SEIR," "MSRA-DeepST," and "USC-SI_kJalpha_RF") showed low mean absolute percentage error (MAPE) ranging from 5 to 35%. Ensemble models performed significantly better than other model types overall, but were not "significantly" better than baseline models (no change or simple linear models). Many models undershot, others overshot, and several lagged the leading edge of real-world data by several weeks.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    Advanced Forecasting Techniques
                </Typography>

                <Typography variant="body1" paragraph>
                    Deep learning approaches for disease outbreak prediction address challenges of having robust early warning signals. A study employing best-performing deep learning models in time series classification demonstrated that models trained on simulated dynamical systems and noise-induced disease dynamics outperformed previous models, effectively providing early warning signals across various scenarios including influenza and COVID-19.
                </Typography>

                <Typography variant="body1" paragraph>
                    AI models can forecast spatiotemporal clustering of infectious diseases, enabling early warnings by identifying different regions at different time points. Graph neural networks accurately predict COVID-19 cases per region and forecast influenza-like illness through their ability to represent rich relationships. A hybrid AI framework for real-time prediction demonstrated 89.6% effectiveness in indicating early warning with best prediction lead time average of 21 days.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    Integration with Traditional Surveillance
                </Typography>

                <Typography variant="body1" paragraph>
                    AI-based digital surveillance serves as an adjunct to—not a replacement of—traditional surveillance methods. AI systems work alongside human-led efforts, providing new insights that help health professionals make better-informed decisions during outbreaks. The integration of AI into early warning systems significantly improves speed and efficiency of outbreak detection and prediction compared to traditional methods.
                </Typography>

                <Typography variant="body1" paragraph>
                    By rapidly processing large amounts of data, AI identifies potential outbreaks much faster than conventional systems relying on manual data collection and analysis. This increased speed supports more timely and effective public health responses. However, AI systems face challenges including data bias, algorithm interpretability, and how alerts should be confirmed. Overreliance on opaque models has potential for missing marginalized areas with insufficient digital data.
                </Typography>

                <Typography variant="body1" paragraph>
                    Cost-effectiveness analyses remain limited but suggest significant value. AI models like BlueDot cost less than $1 million per year, representing a small fraction of pandemic response expenditures running into billions. These systems issued alerts about potential COVID-19 risk 7-10 days before official warnings, providing crucial time for preparation and response.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    Challenges and Future Directions
                </Typography>

                <Typography variant="body1" paragraph>
                    Despite progress, several challenges limit widespread adoption. Uptake of AI surveillance systems by public health authorities, who have been slower to embrace AI than clinical counterparts, remains low. Many systems generate large volumes of unfiltered data; only a few can sort and filter data to provide users with curated intelligence. False positives can trigger mass panic, while false negatives miss emerging threats—balancing sensitivity and specificity remains challenging.
                </Typography>

                <Typography variant="body1" paragraph>
                    Data quality and representativeness affect accuracy—systems trained predominantly on Western data may perform poorly in other contexts. Temporal lags in data availability limit real-time responsiveness. Ethical concerns around surveillance, privacy, and potential misuse of data require careful governance frameworks. Algorithm transparency and validation by public health authorities remain essential for trust and adoption.
                </Typography>

                <Typography variant="body1" paragraph>
                    Future developments should focus on multi-source, multi-channel, or multi-point trigger approaches to improve sensitivity and robustness. Integration of diverse data streams including community surveillance, environmental monitoring, social media, genomic surveillance, and wastewater-based epidemiology can provide more comprehensive outbreak detection. Continued refinement and validation in diverse settings will improve accuracy, reliability, and acceptance by public health authorities.
                </Typography>

                <Typography variant="body1" paragraph>
                    The widespread adoption of digital open-source surveillance and AI technology is needed for prevention of serious epidemics. As AI capabilities advance and more real-world validation occurs, these systems will become increasingly integral to global health security infrastructure, providing the early warning capabilities necessary to prevent localized outbreaks from becoming global pandemics.
                </Typography>

                <Typography variant="body1" paragraph sx={{ mt: 4, fontStyle: 'italic' }}>
                    These three applications—medical diagnosis and treatment, drug discovery and development, and public health surveillance—demonstrate AI's transformative potential in global health. By enhancing diagnostic accuracy, accelerating pharmaceutical innovation, and enabling early outbreak detection, AI addresses critical challenges in healthcare delivery and disease prevention. Realizing this potential requires continued investment in algorithm development, rigorous validation in diverse populations, transparent governance frameworks, and integration with existing healthcare systems while addressing equity concerns to ensure benefits reach all populations globally.
                </Typography>
            </Box>
        )
    },

    // Interdependence Page
    INTERDEPENDENCE: {
        title: "Global Interdependence in Healthcare",
        body: (
            <Box>
                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    1. The Concept of Global Health Interdependence
                </Typography>

                <Typography variant="body1" paragraph>
                    Global health interdependence refers to the interconnected nature of health systems worldwide, where the health outcomes of one nation are increasingly dependent on the health status and policies of other nations. This interdependence has been accelerated by globalization, international travel, trade, and the rapid spread of infectious diseases <CitationLink citationKey="CITE_WHO_01" /> <CitationLink citationKey="CITE_GLOBALIZATION_07" />.
                </Typography>

                <Typography variant="body1" paragraph>
                    The COVID-19 pandemic serves as a stark example of this interdependence, demonstrating how a health crisis originating in one country can rapidly spread across borders, affecting global economies, healthcare systems, and daily life worldwide. This interconnectedness has highlighted the critical need for international cooperation in health governance.
                </Typography>

                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    2. Key Drivers of Global Health Interdependence
                </Typography>

                <Typography variant="body1" paragraph>
                    <strong>International Travel and Migration:</strong> The movement of people across borders facilitates the rapid transmission of diseases, making local health issues global concerns within hours or days.
                </Typography>

                <Typography variant="body1" paragraph>
                    <strong>Global Supply Chains:</strong> Medical supplies, pharmaceuticals, and healthcare equipment are produced and distributed globally. Disruptions in one region can severely impact healthcare delivery in distant countries, as seen during the COVID-19 pandemic with personal protective equipment shortages.
                </Typography>

                <Typography variant="body1" paragraph>
                    <strong>Digital Health and Data Sharing:</strong> Electronic health records, telemedicine, and health data analytics create new forms of interdependence through shared information systems and cross-border health services.
                </Typography>

                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    3. Areas of Interdependence
                </Typography>

                <Typography variant="body1" paragraph>
                    <strong>Disease Surveillance and Control:</strong> Global monitoring and reporting systems enable early detection and response to health threats. The World Health Organization's International Health Regulations (2005) exemplify this interdependence in action <CitationLink citationKey="CITE_INTERDEPENDENCE_06" />.
                </Typography>

                <Typography variant="body1" paragraph>
                    <strong>Knowledge and Technology Transfer:</strong> Medical research, treatment protocols, and health innovations are shared internationally, benefiting patients globally. This includes vaccine development, diagnostic technologies, and treatment protocols.
                </Typography>

                <Typography variant="body1" paragraph>
                    <strong>Health Workforce Mobility:</strong> Healthcare professionals often work across borders, creating interdependence in workforce planning and capacity building.
                </Typography>

                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    4. Challenges and Opportunities
                </Typography>

                <Typography variant="body1" paragraph>
                    While interdependence creates opportunities for collaboration and resource sharing, it also presents significant challenges. Health inequities between nations can be exacerbated by global health crises, and resource disparities can lead to unequal access to healthcare technologies and treatments.
                </Typography>

                <Typography variant="body1" paragraph>
                    However, this interdependence also offers opportunities for coordinated global responses to health emergencies, shared learning from best practices, and collective action on global health challenges such as climate change, antimicrobial resistance, and non-communicable diseases.
                </Typography>

                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    5. The Future of Global Health Interdependence
                </Typography>

                <Typography variant="body1" paragraph>
                    As the world becomes increasingly connected, the interdependence of global health systems will continue to grow. This necessitates stronger international health governance, improved global health security frameworks, and enhanced capacity for coordinated responses to health emergencies <CitationLink citationKey="CITE_PANDEMIC_08" />.
                </Typography>
            </Box>
        )
    },

    // Food Health Page
    FOOD_HEALTH: {
        title: "Food Security and Global Community Health",
        body: (
            <Box>
                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    1. The Connection Between Food and Health
                </Typography>

                <Typography variant="body1" paragraph>
                    Food security is fundamental to global health, as adequate nutrition is essential for human development, disease prevention, and overall well-being. The relationship between food systems and health outcomes is complex and multifaceted, involving agricultural practices, food distribution, and nutritional quality <CitationLink citationKey="CITE_FOOD_03" />.
                </Typography>

                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    2. The Role of AI in Sustainable Agriculture
                </Typography>

                <Typography variant="body1" paragraph>
                    AI and big data technologies are being deployed to enhance the resilience and sustainability of food systems. In the field of **precision agriculture**, AI helps farmers optimize resource use (water, fertilizers, pesticides), reduce environmental pollution, and increase crop yields. This simultaneously addresses environmental and production challenges <CitationLink citationKey="CITE_AI_02" />.
                </Typography>

                <Typography variant="body1" paragraph>
                    Additionally, AI is used in **crisis prediction** by analyzing weather data, climate models, and market trends to provide early warnings about crop failures or supply shortages. In food safety, AI can be integrated into automated quality control systems to detect contaminants or spoilage signs before products reach the market, thereby protecting consumer health on a large scale.
                </Typography>

                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    3. Global Food Security Challenges
                </Typography>

                <Typography variant="body1" paragraph>
                    Climate change, population growth, and economic disparities create significant challenges for global food security. AI technologies offer innovative solutions to optimize food production, reduce waste, and ensure equitable distribution of nutritious food worldwide.
                </Typography>
            </Box>
        )
    },

    // Ethics & Security Page
    ETHICS_SECURITY: {
        title: "Ethics & Security in AI Healthcare",
        body: (
            <Box>
                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    Ethics in AI Healthcare
                </Typography>
                <Typography variant="body1" paragraph>
                    The implementation of Artificial Intelligence (AI) in global healthcare brings enormous benefits but also raises complex **ethical** issues that need to be addressed seriously. The core of the problem lies in the intersection of sensitive data, individual privacy rights, and algorithmic responsibility <CitationLink citationKey="CITE_AI_02" />.
                    When machine learning models are used to make life-and-death decisions—such as treatment protocol decisions or disease recurrence risk—algorithm transparency and explainability become mandatory legal and ethical requirements.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    1. Bias and Fairness Issues
                </Typography>
                <Typography variant="body1" paragraph>
                    One of the greatest risks is algorithmic bias. If AI training data primarily comes from certain population groups or geographic regions (e.g., patient data from wealthy countries), AI models may make inaccurate or ineffective conclusions or diagnoses for other population groups (e.g., minority communities or poor countries) <CitationLink citationKey="CITE_TREATMENT_05" />.
                    This bias can exacerbate existing health disparities and work against the goal of global health equity. Developers need to actively test and adjust models on diverse datasets to ensure universality.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    2. Privacy and Consent
                </Typography>
                <Typography variant="body1" paragraph>
                    The use of electronic health records, genetic data, and biomarkers for AI training poses privacy challenges. Strong international legal frameworks are needed to manage the collection, storage, and sharing of health data, ensuring that patient consent is informed and voluntary. While AI brings community benefits, individual rights must not be violated. Technologies like **Federated Learning** are being researched to allow AI models to learn from multiple datasets without moving or centralizing sensitive data.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    Cybersecurity in Healthcare
                </Typography>
                <Typography variant="body1" paragraph>
                    As healthcare systems become increasingly digitized and networked (from electronic health records EHR to IoT medical devices), **Cybersecurity** risks increase exponentially. Cyber attacks targeting hospitals and healthcare organizations not only cause financial losses but also directly threaten patient lives through disruption of critical care operations <CitationLink citationKey="CITE_CYBER_04" />.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    1. Main Threats
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Ransomware Attacks:</strong> Malicious software that encrypts hospital data, demanding ransom for decryption keys. These attacks can paralyze entire healthcare systems.
                </Typography>

                <Typography variant="body1" paragraph>
                    <strong>Data Breaches:</strong> Unauthorized access to patient medical records, personal information, and sensitive health data.
                </Typography>

                <Typography variant="body1" paragraph>
                    <strong>IoT Device Vulnerabilities:</strong> Connected medical devices can become entry points for cyber attacks if not properly secured.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                    2. Protection Strategies
                </Typography>
                <Typography variant="body1" paragraph>
                    Healthcare organizations must implement comprehensive cybersecurity measures including data encryption, access controls, regular security audits, and staff training to protect against cyber threats and ensure patient safety.
                </Typography>
            </Box>
        )
    },

    // Future Trends Page
    FUTURE_TRENDS: {
        title: "Future Trends in AI Healthcare",
        body: (
            <Box>
                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    1. The Evolution of AI in Healthcare
                </Typography>

                <Typography variant="body1" paragraph>
                    The future of AI in healthcare represents a paradigm shift from reactive treatment to predictive and preventive medicine. By 2030, we anticipate AI systems that can predict health issues years in advance, enabling interventions that prevent diseases before they manifest <CitationLink citationKey="CITE_AI_02" />.
                </Typography>

                <Typography variant="body1" paragraph>
                    The integration of AI across all healthcare domains will create a seamless ecosystem where patient data flows intelligently between systems, enabling real-time decision-making and personalized treatment pathways. This transformation will fundamentally change how we approach global health challenges.
                </Typography>

                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    2. Emerging Technologies and Their Impact
                </Typography>

                <Typography variant="body1" paragraph>
                    <strong>Quantum Computing:</strong> Quantum computers will revolutionize drug discovery by simulating molecular interactions at unprecedented speeds. This technology could reduce drug development timelines from 10-15 years to 2-3 years, making treatments for rare diseases economically viable.
                </Typography>

                <Typography variant="body1" paragraph>
                    <strong>Brain-Computer Interfaces (BCIs):</strong> Direct neural interfaces will enable paralyzed patients to control prosthetics, communicate through thought, and potentially restore lost sensory functions. This technology represents a new frontier in rehabilitation medicine.
                </Typography>

                <Typography variant="body1" paragraph>
                    <strong>Digital Twins:</strong> Virtual replicas of individual patients will allow for personalized treatment simulation and outcome prediction. Doctors will be able to test different treatment approaches on a patient's digital twin before implementing them in reality.
                </Typography>

                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    3. Global Health Transformation
                </Typography>

                <Typography variant="body1" paragraph>
                    AI will democratize access to high-quality healthcare worldwide. Telemedicine platforms powered by AI will provide specialist consultations to remote areas, while AI-powered diagnostic tools will bring advanced medical capabilities to underserved regions.
                </Typography>

                <Typography variant="body1" paragraph>
                    The global health AI network will enable real-time disease surveillance, rapid response coordination, and resource optimization during health emergencies. This interconnected system will transform how we address global health challenges.
                </Typography>

                <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
                    4. Challenges and Opportunities
                </Typography>

                <Typography variant="body1" paragraph>
                    While the future holds immense promise, significant challenges remain. Ethical considerations around AI decision-making, data privacy in an increasingly connected world, and ensuring equitable access to AI-powered healthcare are critical issues that must be addressed.
                </Typography>

                <Typography variant="body1" paragraph>
                    However, the opportunities are equally significant. AI has the potential to eliminate health disparities, accelerate medical breakthroughs, and create a more resilient global health system capable of responding to any challenge.
                </Typography>
            </Box>
        )
    }
};