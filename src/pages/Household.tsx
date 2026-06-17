import { useState } from 'react';
import { Users, FileCheck, ArrowRight, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import MaterialList from '@/components/MaterialList';
import { householdData, siteInfo } from '@/data/archiveData';

export default function Household() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="pt-20">
      <PageHeader
        title="户籍档案查询指南"
        subtitle="详细了解户籍档案查询所需材料、办理流程和常见问题，助您高效完成查档。"
      />

      {/* Introduction */}
      <section className="section-py">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <SectionTitle title={householdData.introduction.title} align="left" />
              <div className="prose prose-lg max-w-none">
                {householdData.introduction.content
                  .split('\n\n')
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-lg text-ink-700 leading-relaxed mb-5 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-gold-50 rounded-2xl p-8 border border-primary-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-ink-900">
                    查询咨询
                  </h3>
                  <p className="text-ink-600">工作日均可咨询</p>
                </div>
              </div>
              <div className="space-y-4">
                <a
                  href={`tel:${siteInfo.phone}`}
                  className="flex items-center justify-between bg-white rounded-xl px-5 py-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="font-medium text-ink-800">咨询电话</span>
                  </div>
                  <span className="text-primary-700 font-semibold">
                    {siteInfo.phone}
                  </span>
                </a>
                <div className="bg-white rounded-xl px-5 py-4">
                  <p className="text-ink-600 text-sm">
                    建议提前准备好被查询人的
                    <span className="text-primary-700 font-medium">姓名</span>和
                    <span className="text-primary-700 font-medium">身份证号</span>
                    ，以便快速定位档案。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Materials */}
      <section className="section-py bg-cream-100">
        <div className="container">
          <SectionTitle
            title="所需材料"
            subtitle="请根据您的查询类型，准备好相应的材料。带*号为必填材料。"
          />

          <MaterialList sections={householdData.materials} />
        </div>
      </section>

      {/* Process */}
      <section className="section-py">
        <div className="container">
          <SectionTitle
            title="办理流程"
            subtitle="档案查询按照以下流程进行，整个过程约需30-60分钟。"
          />

          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-gold-300 to-primary-200 -translate-y-1/2 rounded-full"></div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {householdData.process.map((step) => (
                <div
                  key={step.id}
                  className="relative bg-white rounded-2xl shadow-card p-6 text-center group hover:-translate-y-1 transition-transform"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary-700 group-hover:to-primary-800 transition-all">
                    <span className="font-serif text-2xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-ink-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-ink-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {step.step < 6 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-1/2 w-6 h-6 text-gold-400 -translate-y-1/2 z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-cream-100">
        <div className="container">
          <SectionTitle
            title="常见问题"
            subtitle="以下是市民查询户籍档案时经常遇到的问题，希望能帮到您。"
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {householdData.faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-card overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cream-50 transition-colors"
                  onClick={() =>
                    setOpenFaq(openFaq === faq.id ? null : faq.id)
                  }
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 font-bold text-sm">
                        Q
                      </span>
                    </div>
                    <span className="text-lg font-medium text-ink-900">
                      {faq.question}
                    </span>
                  </div>
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-ink-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === faq.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 flex gap-4">
                    <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gold-700 font-bold text-sm">A</span>
                    </div>
                    <p className="text-ink-600 leading-relaxed pt-1">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-700">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            还有疑问？
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            如您还有其他问题，欢迎拨打咨询电话，我们的工作人员将竭诚为您服务。
          </p>
          <a
            href={`tel:${siteInfo.phone}`}
            className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-primary-900 font-bold text-lg px-8 py-4 rounded-xl transition-colors"
          >
            <Phone className="w-6 h-6" />
            {siteInfo.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
