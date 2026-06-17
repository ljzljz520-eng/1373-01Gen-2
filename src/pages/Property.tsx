import { Home, ArrowRight, Phone, Receipt, DollarSign } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import MaterialList from '@/components/MaterialList';
import { propertyData, siteInfo } from '@/data/archiveData';

export default function Property() {
  return (
    <div className="pt-20">
      <PageHeader
        title="房产档案查询指南"
        subtitle="详细了解房产档案查询所需材料、办理流程和收费标准，助您高效完成查档。"
      />

      {/* Introduction */}
      <section className="section-py">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <SectionTitle title={propertyData.introduction.title} align="left" />
              <div className="prose prose-lg max-w-none">
                {propertyData.introduction.content
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
                  <Home className="w-7 h-7 text-white" />
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
                    请准备好房屋的
                    <span className="text-primary-700 font-medium">详细地址</span>或
                    <span className="text-primary-700 font-medium">产权证号</span>
                    ，以便快速检索档案。
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
            subtitle="请根据您的查询身份，准备好相应的材料。带*号为必填材料。"
          />

          <MaterialList sections={propertyData.materials} />
        </div>
      </section>

      {/* Process */}
      <section className="section-py">
        <div className="container">
          <SectionTitle
            title="办理流程"
            subtitle="房产档案查询按照以下流程进行，整个过程约需30-60分钟。"
          />

          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-gold-300 to-primary-200 -translate-y-1/2 rounded-full"></div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {propertyData.process.map((step) => (
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

      {/* Fees */}
      <section className="section-py bg-cream-100">
        <div className="container">
          <SectionTitle
            title="收费标准"
            subtitle="档案利用服务收费按照物价部门核定标准执行，以下为常见项目收费标准。"
          />

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <div className="bg-gradient-to-r from-primary-700 to-primary-600 px-6 py-5">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-gold-300" />
                  <h3 className="font-serif text-2xl font-bold text-white">
                    档案利用收费项目
                  </h3>
                </div>
              </div>
              <table className="w-full">
                <thead className="bg-cream-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-ink-800 text-lg">
                      收费项目
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-ink-800 text-lg">
                      收费标准
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-ink-800 text-lg">
                      备注
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream-200">
                  {propertyData.fees.map((fee, index) => (
                    <tr
                      key={index}
                      className="hover:bg-cream-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-ink-700 text-lg">
                        {fee.item}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="font-bold text-primary-700 text-xl">
                          {fee.standard}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-ink-500">
                        {fee.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-6 py-5 bg-gold-50 border-t border-gold-100">
                <div className="flex items-start gap-3">
                  <Receipt className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
                  <p className="text-ink-600">
                    收费标准如有调整，以服务大厅公示为准。可凭本人有效证件开具正规发票。
                  </p>
                </div>
              </div>
            </div>
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
