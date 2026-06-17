import { MapPin, Phone, Mail, Bus } from 'lucide-react';
import { siteInfo } from '@/data/archiveData';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-2xl font-bold text-gold-400 mb-4">
              {siteInfo.name}
            </h3>
            <p className="text-white/70 leading-relaxed mb-6">
              保存城市记忆，传承历史文明。为社会各界提供优质的档案查阅利用服务。
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors cursor-pointer">
                <span className="text-xs font-bold text-gold-400">微</span>
              </div>
              <div className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors cursor-pointer">
                <span className="text-xs font-bold text-gold-400">博</span>
              </div>
              <div className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors cursor-pointer">
                <span className="text-xs font-bold text-gold-400">抖</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-gold-300 mb-5">
              联系我们
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <span className="text-white/80">{siteInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-white/80">{siteInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-white/80">{siteInfo.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-gold-300 mb-5">
              交通指南
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Bus className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 mb-1">
                    公交：{siteInfo.busRoutes.join('、')}
                  </p>
                  <p className="text-white/60 text-sm">{siteInfo.busStop} 下车</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs font-bold">M</span>
                </div>
                <p className="text-white/80">{siteInfo.subway}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-800">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">{siteInfo.copyright}</p>
          <p className="text-white/50 text-sm">{siteInfo.icp}</p>
        </div>
      </div>
    </footer>
  );
}
